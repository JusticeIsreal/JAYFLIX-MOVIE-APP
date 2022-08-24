import React from "react";
import { createContext, useReducer, useEfffect } from "react";
import CardPage from "../dataPage/CardData";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const dynamicBtn = [
    "All",
    ...new Set(CardPage.map((category) => category.category)),
  ];
  

  const newState = (state, action) => {};
  const initialState = {
    movies: CardPage,
  };

  const [state, dispatch] = useReducer(newState, initialState);
  return (
    <AppContext.Provider value={{ dynamicBtn }}>{children}</AppContext.Provider>
  );
};

export default AppContext;
