import React from "react";
import ImageUpload from "./components/ImageUpload";

export default function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Pickabook – Illustration Personaliser</h1>
      <p>Upload a child's photo and generate a personalised illustration.</p>
      <ImageUpload />
    </div>
  );
}
