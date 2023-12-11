import React from "react";
import ThemeButton from "../ThemeButton";
import "./header.css";
function Header({ title, buttonIcon, buttonText, toggleDarkMode }) {
  return (
    <div>
      <nav className="navbar align-items-center sticky-top">
        <div className="container-fluid">
          <h1 className="m-0">{title}</h1>
          <ThemeButton
            icon={buttonIcon}
            text={buttonText}
            action={toggleDarkMode}
          />
        </div>
      </nav>
    </div>
  );
}

export default Header;
