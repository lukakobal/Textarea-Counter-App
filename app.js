import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const maxLength = 120;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const remaining = maxLength - text.length;
  const isOverLimit = remaining < 0;

  return (
    <div className="container">
      <h1>Textarea Counter ✍️</h1>

      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Write your message..."
      />

      <p className={isOverLimit ? "warning" : ""}>
        {remaining} characters remaining
      </p>

      {isOverLimit && (
        <div className="error-box">You have exceeded the limit ❌</div>
      )}
    </div>
  );
}
