import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

function BackButton() {
  return (
    <div>
      <a href="/">
        <button className="back-button">
          <IoIosArrowRoundBack size="1.5em" style={{ marginLeft: "2.2rem" }} />
          <p className="back-button-text">Back</p>
        </button>
      </a>
    </div>
  );
}

export default BackButton;
