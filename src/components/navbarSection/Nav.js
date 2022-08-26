import "./NavStyle.css";
import profile_pic from "./profile_pic/profile_pic.jpg";
import { Link, useParams } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";

function Nav() {
  return (
    <div className="nav-section">
      {/* app icon */}
      <div className="app-icon">
        <Link style={{ color: "red" }} to="/">
          <h1>JAYFLIX</h1>
        </Link>
      </div>

      {/* navbar begins */}
      <nav>
        <ul>
          <li className="link">
            <a style={{ color: "whitesmoke" }} href="#movies">
              TV Shows
            </a>
          </li>
          <li>
            <a style={{ color: "whitesmoke" }} href="#movies">
              Movies
            </a>
          </li>
          <li>
            <a style={{ color: "whitesmoke" }} href="#category">
              Category
            </a>
          </li>
        </ul>
      </nav>

      {/* search and profile image con */}
      <div className="search-profile-con">
        <div className="watch-con">
          <p>0</p>
          <BiCameraMovie className="watch-icon" />
        </div>

        <div className="profile-img-con">
          <img src={profile_pic} alt="" />
        </div>
      </div>
      {/* end */}
    </div>
    //   page over
  );
}

export default Nav;
