import React, { useState } from "react";
import axios from "axios";

export default function ImageUpload() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const backendURL = "https://your-replit-backend-url"; // CHANGE THIS

  const handleUpload = async () => {
    if (!image) return alert("Please upload a photo!");

    const formData = new FormData();
    formData.append("file", image);

    try {
      setLoading(true);
      const res = await axios.post(`${backendURL}/process-image`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      setResult("data:image/png;base64," + res.data.image_base64);
    } catch (err) {
      alert("Error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button onClick={handleUpload} style={{ marginLeft: "20px" }}>
        Generate
      </button>

      {loading && <p>Processing... Please wait.</p>}

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>Result Illustration</h3>
          <img src={result} width="300px" />
        </div>
      )}
    </div>
  );
}
