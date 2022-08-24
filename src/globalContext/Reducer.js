// useReducer function
const reducer = (state, action) => {
  // menu toggle control
  if (action.type === "MENU_TOGGLE") {
    let newArr = state.movie.filter((m) => m.category === action.payload);
    console.log(newArr);
    return {
      ...state,
      movie: newArr,
    };
  }
  return state;
};
export default reducer;
