import "./watchList.css";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import AppContext from "../../../globalContext/AppProvider";

function WatchList() {
  const { watchListCart,  removeModal, modal } = useContext(AppContext);
  //   console.log("bj");
  return (
    <>
      {modal && (
        <div className="watchList-con">
          <FaTimes className="remove-watchlist-con-icon" onClick={removeModal}/>
          {watchListCart.map((item, index) => (
            <WatchListCart key={index} {...item} />
          ))}
        </div>
      )}
    </>
  );
}

function WatchListCart({ id, title, img, description }) {
  const { removeWatchList } = useContext(AppContext);

  return (
    <div className="watchList-item">
      <div className="remove-watchlist-con" onClick={() => removeWatchList(id)}>
        <FaTimes className="remove-watchlist-icon" />
      </div>
      <div className="watchlist-main-con2">
        <Link
          to={`/dd/${id}`}
          style={{ color: "whitesmoke" }}
          className="watchlist-img"
        >
          <img src={img} alt={title} />
        </Link>
        <span className="span">
          <h3>{title}</h3>
          <p>{description}</p>
        </span>
      </div>
    </div>
  );
}

export default WatchList;
