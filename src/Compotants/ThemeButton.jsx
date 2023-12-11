import React from "react";

function ThemeButton({ icon, text, action }) {
  return (
    <div>
      <button className="dark-mode-button" id="dark-theme" onClick={action}>
        {icon && (
          <span style={{ marginRight: "6px", marginBottom: "5px" }}>
            {icon}
          </span>
        )}
        <p>{text}</p>
      </button>
    </div>
  );
}

export default ThemeButton;
