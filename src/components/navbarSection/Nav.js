import "./NavStyle.css";
import { Link, useParams } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

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
            <Link style={{ color: "whitesmoke" }} to="/">
              TV Shows
            </Link>
          </li>
          <li>
            <Link style={{ color: "whitesmoke" }} to="/about">
              Movies
            </Link>
          </li>
          <li>
            <Link style={{ color: "whitesmoke" }} to="">
              Category
            </Link>
          </li>
        </ul>
      </nav>

      {/* search and profile image con */}
      <div className="search-profile-con">
        <BiSearchAlt className="search-icon" />
        <div className="profile-img-con">
          <img src="" alt="" />
        </div>
      </div>
      {/* end */}
    </div>
    //   page over
  );
}

export default Nav;
