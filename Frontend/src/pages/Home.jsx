import { useEffect, useState } from "react";
import api from "../utils/axiosInstance.js";
import { Edit, TrashIcon, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const [proverb, setProverb] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

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

  return (
    <div className="">
      <div className="text grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 mt-10 m-5">
        {proverb.map((pro) => (
          <div className="cards">
            <h1 className="text mb-2 text-center">
              <span className="third-color"> AFG </span>Proverbs
            </h1>
            <h2 className="text text-right">
              {pro.textPashto}
            </h2>
            <h3 className="text text-right">
              {pro.textDari}
            </h3>

            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center text-blue-600 hover:text-blue-800 font-semibold mt-3"
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
                <span className="secondary-color"> English Meaning: </span> {pro.textEnglish}
              </h3>
              <h4 className="text-xs text-gray-800 italic">
               <span className="secondary-color"> Meaning:</span> {pro.meaning}
              </h4>
              <span className="text-xs font-medium text-blue-500">
                <span className="secondary-color"> Category:</span> {pro.category}
              </span>
            </div>

            <div className="flex justify-between mt-4">
              <Link
                to={`/updateproverb/${pro.id}`}
                className="editbtn"
              >
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
        ))}
      </div>
    </div>
  );
};

export default Home;
