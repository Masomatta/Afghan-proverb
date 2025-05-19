import api from "../utils/axiosInstance.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditPage = () => {
  const [textpashto, setTextpashto] = useState("");
  const [textdari, setTextdari] = useState("");
  const [textenglish, setTextenglish] = useState("");
  const [meaning, setMeaning] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    api.get(`/${id}`).then((res) => {
      const fetchedData = res.data;
      setTextpashto(fetchedData.textPashto);
      setTextdari(fetchedData.textDari);
      setTextenglish(fetchedData.textEnglish);
      setMeaning(fetchedData.meaning);
      setCategory(fetchedData.category);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.put(`/${id}`, {
        textPashto: textpashto,
        textDari: textdari,
        textEnglish: textenglish,
        meaning: meaning,
        category: category,
      });

      if (res.status === 200) {
        setMessage("Proverb Updated Successfully!");
      } else {
        setMessage("Failed to update");
      }
    } 
    catch (err) {
      setMessage("Failed to update");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="card">
        <h1>Edit Proverb</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label>Pashto Meaning</label>
          <input
            className="input"
            value={textpashto}
            onChange={(e) => setTextpashto(e.target.value)}
          />

          <label>Dari Meaning</label>
          <input
            className="input"
            value={textdari}
            onChange={(e) => setTextdari(e.target.value)}
          />

          <label>English Meaning</label>
          <input
            className="input"
            value={textenglish}
            onChange={(e) => setTextenglish(e.target.value)}
          />

          <label>Meaning</label>
          <input
            className="input"
            value={meaning}
            onChange={(e) => setMeaning(e.target.value)}
          />

          <label>Category</label>
          <input
            className="input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          {message && <p>{message}</p>}

          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
