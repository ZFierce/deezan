import React, { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("text", text);

      const res = await axios.post(
        "https://your-backend-url.onrender.com/submit",
        formData
      );
      setResults(res.data);
    } catch (err) {
      alert("Error fetching data");
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Fashion Finder</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Describe the clothing item"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ width: "100%", padding: 10, fontSize: 16 }}
        />
        <button type="submit" style={{ marginTop: 10, padding: 10, width: "100%" }}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      <div>
        {results.length === 0 && !loading && <p>No results yet.</p>}
        {results.map((item, i) => (
          <div key={i} style={{ marginBottom: 20, borderBottom: "1px solid #ccc", paddingBottom: 10 }}>
            <a href={item.link} target="_blank" rel="noreferrer" style={{ fontWeight: "bold", fontSize: 18 }}>
              {item.title}
            </a>
            <p>{item.brand} - {item.price}</p>
            {item.thumbnail && (
              <img src={item.thumbnail} alt={item.title} style={{ maxWidth: "100%", height: "auto" }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
