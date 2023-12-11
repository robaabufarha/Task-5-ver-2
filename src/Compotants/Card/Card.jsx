import React from "react";
import "./card.css";

function Card({ id, src, alt, name, Population, Region, Capital }) {
  return (
    <div className="col col-12">
      <div className="card">
        <a href="/details">
          <img src={src} className="card-img-top" alt={alt} />
        </a>
        <div className="card-body">
          <h4 className="card-title text-truncate">{name}</h4>
          <div className="card-text">
            <div className="text-truncate">
              <b>Population:</b> {Population}
            </div>
            <div className="text-truncate">
              <b>Region:</b> {Region}
            </div>
            <div className="text-truncate">
              <b>Capital:</b> {Capital}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
