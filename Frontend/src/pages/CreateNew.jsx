import { useState } from "react";
import api from "../utils/axiosInstance.js";

const CreateNew = () => {
  const [textpashto, setTextpashto] = useState("");
  const [textdari, setTextdari] = useState("");
  const [textenglish, setTextenglish] = useState("");
  const [meaning, setMeaning] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    // Trim inputs
    const pashto = textpashto.trim();
    const dari = textdari.trim();
    const english = textenglish.trim();
    const mean = meaning.trim();
    const cat = category.trim();

    if (!pashto || !dari || !english || !mean || !cat) {
      setMessage("❌ All fields are required!");
      return;
    } else {
      api
        .post("/", {
          textPashto: pashto,
          textDari: dari,
          textEnglish: english,
          meaning: mean,
          category: cat,
        })
        .then((res) => {
          if (res.status === 201) {
            setMessage("✅ Proverb created successfully!");
            setTextpashto("");
            setTextdari("");
            setTextenglish("");
            setMeaning("");
            setCategory("");
          }
        })
        .catch(() => {
          setMessage("⚠️ Failed to create proverb.");
        });
    }
  };
  return (
    <div className="flex justify-center mt-10">
      <div className="card">
        <label className="label">Dari</label>
        <input
          className="input"
          placeholder="Enter The Dari meaning"
          required
          onChange={(e) => setTextdari(e.target.value)}
        />
        <label className="label">Pashto</label>
        <input
          className="input"
          placeholder="Enter the pashto meaning "
          required
          onChange={(e) => setTextpashto(e.target.value)}
        />
        <label className="label">English</label>
        <input
          className="input"
          placeholder="Enter the English meaning"
          required
          onChange={(e) => setTextenglish(e.target.value)}
        />
        <label className="label">Meaning</label>
        <input
          className="input"
          placeholder="Enter the meaning"
          required
          onChange={(e) => setMeaning(e.target.value)}
        />
        <label className="label">Category</label>
        <input
          className="input"
          placeholder="Enter the category"
          required
          onChange={(e) => setCategory(e.target.value)}
        />

        {message && <p className="text-gray-950">{message}</p>}
        <button className="btn" onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default CreateNew;
