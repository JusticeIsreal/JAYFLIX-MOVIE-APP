import "./BannerStyle.css";
import BannerData from "../../dataPage/BannerData.js";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Banner() {
  return (
    // Banner component starts 
    <div className="slide-container">
      {/* fade import */}
      <Fade arrows={false}>
        {BannerData.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src={fadeImage.img} alt="" />
            </div>
          </div>
        ))}
      </Fade>
    </div>
    // end of banner
  );
}

export default Banner;
