import { useState, useEffect } from "react";
import  "./ToggleButton.css";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        padding: "7px",
        borderRadius: "50%",
        backgroundColor: darkMode ? "#444" : "#999",
        color: darkMode ? "#fff" : "#000",
        border: "none",
        fontSize: "18px",
        cursor: "pointer"
      }}
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;

