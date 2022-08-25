// useReducer function
import CardData from "../dataPage/CardData";
const reducer = (state, action) => {
  // menu toggle control
  if (action.type === "MENU_TOGGLE") {
    let newArr = CardData.filter((m) => m.category === action.payload);
    console.log(newArr);
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

  return state;
};

export default reducer;
