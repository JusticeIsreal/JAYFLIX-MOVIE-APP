import CardData from "../../dataPage/CardData.js";
import { FaPlay } from "react-icons/fa";
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
      <div className="imgDL-bg">
        <FaPlay className="open-icon"/>
      </div>
      <img src={img} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default Section1;
