import "./watchList.css";
import { useReducer, useContext } from "react";
import AppContext from "../../../globalContext/AppProvider";

function WatchList() {
  const { watchListCart } = useContext(AppContext);
  //   console.log(watchListCart);
  return (
    <div className="watchList-con">
      {watchListCart.map((item, index) => (
        <WatchListCart key={index} {...item} />
      ))}
    </div>
  );
}

function WatchListCart({ id, title, img }) {
  return (
    <div className="watchList-item">
      <img src={img} alt="" />
      <p>{title}</p>
    </div>
  );
}

export default WatchList;
