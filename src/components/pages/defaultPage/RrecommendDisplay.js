import CardData from "../../../dataPage/CardData.js";
import "./defaultPage.css";
import { Link, useParams } from "react-router-dom";
import { ImDownload } from "react-icons/im";
import { FaTimes } from "react-icons/fa";

function RecommendDisplay() {
  const { id } = useParams();
  let fullDetails = CardData.find((item) => item.id === parseInt(id));

  return (
    // default page main con
    <div className="modal-display">
      {/* default image */}
      <img
        src={fullDetails.img}
        alt={fullDetails.title}
        className="default-bg"
      />
      {/* movie details */}
      <div className="modal-container">
        <div className="movie-img">
          <Link to="/" className="return-btn">
            <FaTimes />
          </Link>
          <img src={fullDetails.img} alt={fullDetails.title} />
        </div>

        <div className="movie-content">
          <div className="movie-title">
            <h3>{fullDetails.title}</h3>
          </div>
          <div className="movie-description">
            <p>{fullDetails.description}</p>
          </div>
          <div className="movie-download">
            <button>
              <ImDownload className="download-icon" />
              Douwnload
            </button>
          </div>
        </div>
      </div>
      {/* end of movie details */}
    </div>
    // end of default page
  );
}

export default RecommendDisplay;
