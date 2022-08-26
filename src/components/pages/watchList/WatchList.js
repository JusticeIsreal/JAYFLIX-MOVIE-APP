import React from "react";
import { useReducer, useContext } from "react";
import AppContext from "../../../globalContext/AppProvider";

function WatchList() {
  const { watchListCart } = useContext(AppContext);
  console.log(watchListCart);
  return (
    <div>
      {watchListCart.map((item,index) =>  <p key={index}>{item.title}</p>)}
          
          fhfdhfhgfhgfgj
    </div>
  );
}

export default WatchList;
