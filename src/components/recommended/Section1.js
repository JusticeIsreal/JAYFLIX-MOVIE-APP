import CardData from "../../dataPage/CardData.js";
import "./recommend.css";

function Section1() {
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
const RecommedMovies = ({ id, title, img }) => {
  return (
    <div className="carousel-item ">
      <img src={img} alt="" />
      <p>{title}</p>
    </div>
  );
};

export default Section1;
