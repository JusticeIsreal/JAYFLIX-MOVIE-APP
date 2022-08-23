import "./BannerStyle.css";
import BannerData from "../../dataPage/BannerData.js";
import { Slide, Fade, Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Banner() {
  return (
    <div className="slide-container">
      {/* <Slide>
        {BannerData.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <img src={slideImage.img} alt="" />
          </div>
        ))}
      </Slide> */}
      <Fade nextArrow={false} Navigate={false}> 
        {BannerData.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src={fadeImage.img} alt="" />
            </div>
          </div>
        ))}
      </Fade>
      {/* <Zoom scale={0.4}>
        {BannerData.map((each, index) => (
          <img key={index} style={{ width: "100%" }} src={each.img} />
        ))}
      </Zoom> */}
    </div>
  );
}


export default Banner;
