import CardData from "../../../dataPage/CardData.js";
import "./defaultPage.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../Home.js";
import { ImArrowDown } from "react-icons/im";
import { FaTimes } from "react-icons/fa";

function RecommendDisplay() {
  const { id } = useParams();
  let fullDetails = CardData.find((item) => item.id === parseInt(id));

  return (
    <div className="modal-display">
      <img
        src={fullDetails.img}
        alt={fullDetails.title}
        className="default-bg"
      />
      <div className="modal-container">
        <Link to="/" className="return-btn">
          <FaTimes />
        </Link>
        <img src={fullDetails.img} alt={fullDetails.title} />
        <div className="movie-title">
          <h3>{fullDetails.title}</h3>
        </div>
        <div className="movie-description">
          <p>{fullDetails.description}</p>
        </div>
        <ImArrowDown />
      </div>
    </div>
  );
}

export default RecommendDisplay;
