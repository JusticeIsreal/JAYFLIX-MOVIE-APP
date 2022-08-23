import CardData from "../../../dataPage/CardData.js";
import "./defaultPage.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function RecommendDisplay() {
  const { id } = useParams();
  let fullDetails = CardData.find((item) => item.id === parseInt(id));

  return (
    <div className="display">
      <img src={fullDetails.img} alt={fullDetails.title} />
      {/* <p>{fullDetails.title}</p> */}
    </div>
  );
}

export default RecommendDisplay;
