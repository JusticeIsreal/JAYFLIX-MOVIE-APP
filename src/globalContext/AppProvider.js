import React from "react";
import { createContext, useReducer } from "react";
import CardPage from "../dataPage/CardData";
import reducer from "./Reducer";

const AppContext = createContext();
// to disstructure filter buttons
const dynamicBtn = [
  "All",
  ...new Set(CardPage.map((category) => category.category)),
];
// initial state of all functions
const initialState = {
  movie: CardPage,
  watchListCart: [],
  modal: false,
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // all functions and states
  const toggleMenu = (item) => {
    dispatch({ type: "MENU_TOGGLE", payload: item });
    if (item === "All") {
      dispatch({ type: "MENU_TOGGL" });
    }
  };

  // add to watch list cart
  const addWatchList = (id) => {
    dispatch({ type: "ADD_WATCHLIST", payload: id });
  };

  // remove from watch list cart
  const removeWatchList = (id) => {
    dispatch({ type: "REMOVE_WATCHLIST", payload: id });
  };

  const showModal = (id) => {
    dispatch({ type: "SHOW_MODAL", payload: id });
  };
  const removeModal = (id) => {
    dispatch({ type: "REMOVE_MODAL", payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        dynamicBtn,
        toggleMenu,
        addWatchList,
        removeWatchList,
        showModal,
        removeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
