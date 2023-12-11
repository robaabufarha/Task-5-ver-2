import React from "react";
import "../pages/Details/DetailsStyle.css";
function CountryDetails() {
  return (
    <article className="details-container">
      <div className="left-side">
        <div className="details-info">Native Name:</div> Belgie
        <br />
        <div className="details-info">Population: </div> 11,319,511
        <br />
        <div className="details-info">Reagion: </div> Europe
        <br />
        <div className="details-info">Sub Reagion: </div>Westren Europe
        <br />
        <div className="details-info">Capital: </div>Brussols
      </div>
      <div className="right-side">
        <div className="details-info">Top level Domain:</div> be
        <br />
        <div className="details-info">Currencies: </div> Euro
        <br />
        <div className="details-info">Reagion: </div> Europe
        <br />
        <div className="details-info">Langage: </div>Dotch, French, German
      </div>
    </article>
  );
}

export default CountryDetails;
