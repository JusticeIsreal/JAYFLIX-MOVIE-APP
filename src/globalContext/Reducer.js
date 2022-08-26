// useReducer function
import CardData from "../dataPage/CardData";
const reducer = (state, action) => {
  // menu toggle control
  if (action.type === "MENU_TOGGLE") {
    let newArr = CardData.filter((m) => m.category === action.payload);
    // console.log(newArr);
    return {
      ...state,
      movie: newArr,
    };
  }
  if (action.type === "MENU_TOGGL") {
    return {
      ...state,
      movie: CardData,
    };
  }
  if (action.type === "ADD_WATCHLIST") {
    let newCart = CardData.filter((film) => film.id === action.payload);

    // console.log([...newCart, ...state.watchListCart]);
    // console.log({...newCart}, ...state.watchListCart)
    return {
      ...state,
      watchListCart: [...newCart, ...state.watchListCart],
    };
  }

  return state;
};

export default reducer;
