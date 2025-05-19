import { useEffect, useState } from "react";
import api from "../utils/axiosInstance.js";
import { Edit, TrashIcon, ChevronDown, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";

const Home = () => {
  const [proverb, setProverb] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  const handleDeleteProverb = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Proverb?"
    );

    try {
      if (confirmDelete) {
        await api.delete(`/${id}`);

        setProverb((prevProverb) =>
          prevProverb.filter((proverb) => proverb.id !== id)
        );

        alert("Proverb deleted successfully!");
      }
    } catch (error) {
      alert("Failed to delete the Proverb!");
    }
  };

  useEffect(() => {
    api.get("/").then((res) => {
      setProverb(res.data);
    });
  }, []);

  const filteredProverbs = proverb.filter((pro) => {
    const matchesSearch =
      pro.textPashto.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pro.textDari.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pro.textEnglish.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "all" ||
      pro.category.trim().toLowerCase() === category.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="primary-background p-5">
        <div className="home">
          <div className="relative w-full max-w-md">
            <Search
              className="search-icon"
              size={18}
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search proverbs..."
              className="search"
            />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="category"
          >
            <option value="all">All Categories</option>
            <option value="Wisdom">Wisdom</option>
            <option value="Unity">Unity</option>
            <option value="Teamwork">Teamwork</option>
          </select>
        </div>

        <div className="text grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredProverbs.length > 0 ? (
            filteredProverbs.map((pro) => (
              <div key={pro.id} className="cards">
                <h1 className="text mb-2 text-center">
                  <span className="third-color">AFG </span>Proverbs
                </h1>
                <h2 className="text text-right">{pro.textPashto}</h2>
                <h3 className="text text-right">{pro.textDari}</h3>

                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <ChevronDown className="mr-1 w-5 h-5" />
                  See Details
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out mt-2 ${
                    showDetails ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <h3 className="text-sm text-gray-800">
                    <span className="secondary-color">English Meaning: </span>
                    {pro.textEnglish}
                  </h3>
                  <h4 className="text-xs text-gray-800 italic">
                    <span className="secondary-color">Meaning:</span>{" "}
                    {pro.meaning}
                  </h4>
                  <span className="text-xs font-medium text-blue-500">
                    <span className="secondary-color">Category:</span>{" "}
                    {pro.category}
                  </span>
                </div>

                <div className="flex justify-between mt-4">
                  <Link to={`/updateproverb/${pro.id}`} className="editbtn">
                    <Edit size={18} />
                  </Link>
                  <button
                    onClick={() => handleDeleteProverb(pro.id)}
                    className="deletebtn"
                  >
                    <TrashIcon size={18} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No proverbs found for the selected category or search term.
            </p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
