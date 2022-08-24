import CardData from "../../dataPage/CardData.js";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./recommend.css";

function Section1() {
  // filter for only videos with pref of recommended
  let recommendedVideos = CardData.filter(
    (item) => item.pref === "Recommended"
  );

  return (
    <div className="section-con">
      <h1>Recommended videos</h1>
      <div className="section">
        {recommendedVideos.map((item) => (
          <RecommedMovies key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

// second component to create individual seperate functions and id
const RecommedMovies = ({ id, title, img }) => {
  return (
    <div className="carousel-item ">
      <Link to={`/dd/${id}`} style={{ color: "whitesmoke" }}>
        <div className="imgDL-bg">
          <FaPlay className="open-icon" />
        </div>
      </Link>
      <img src={img} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default Section1;
