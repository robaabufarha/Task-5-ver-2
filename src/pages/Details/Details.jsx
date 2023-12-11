import React, { useState, useEffect } from "react";
import "./DetailsStyle.css";
import de from "../../assets/images/de.svg";
import Header from "../../Compotants/Header/Header";
import BackButton from "../../Compotants/BackButton";
import CountryDetails from "../../Compotants/CountryDetails";
import { IoMoonOutline } from "react-icons/io5";
import CountryBorders from "../../Compotants/CountryBorders";
function Details() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <Header
        title="Where in the world?"
        buttonIcon={<IoMoonOutline />}
        buttonText="Dark Mode"
        toggleDarkMode={toggleDarkMode}
      />
      <BackButton />
      <div className="main-container py-5">
        <div>
          <img src={de} alt="Germany flag" />
        </div>

        <div>
          <h2 className="header-country">Belgium</h2>
          <CountryDetails />
          <CountryBorders />
        </div>
      </div>
    </div>
  );
}

export default Details;
