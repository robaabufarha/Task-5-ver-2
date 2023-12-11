import React, { useState, useEffect } from "react";
import "./Home.css";

import { IoMoonOutline } from "react-icons/io5";
import { FilterList } from "../../Compotants/FilterList";
import GenericDropdown from "../../Compotants/Dropdown/GenericDropdown";
import { CountryInfo } from "../../Compotants/CountryInfo";

import Search from "../../Compotants/Search/Search";

import FavouritReagion from "../../Compotants/FavouritReagion/FavouritReagion";
import Card from "../../Compotants/Card/Card";
import Header from "../../Compotants/Header/Header";

import "bootstrap/dist/css/bootstrap.css";
function Home() {
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
      <section className="search-container d-flex justify-content-between py-5">
        <Search placeholder="Search for a country ..." />
        <GenericDropdown items={FilterList} defaultLabel="Filter by" />
      </section>

      <div className="grid-container">
        <div className="vertical-menu-container">
          <FavouritReagion />
        </div>
        <div className="country-info-container">
          <div className="container-fluid text-center">
            <div
              className="row row-cols-xxl-3 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 gx-5 gy-5"
              id="country-info"
            >
              {CountryInfo.map((CountryInfo) => (
                <Card
                  key={CountryInfo.id}
                  src={CountryInfo.src}
                  alt={CountryInfo.alt}
                  name={CountryInfo.name}
                  Population={CountryInfo.Pobulation}
                  Region={CountryInfo.Reagion}
                  Capital={CountryInfo.Capital}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
