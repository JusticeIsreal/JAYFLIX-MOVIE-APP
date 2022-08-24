import { useContext } from "react";
import "../movieCollections/MoviesStyle.css";
import AppContext from "../../globalContext/AppProvider";

function Movies() {
  const { dynamicBtn } = useContext(AppContext);
  console.log(dynamicBtn);
  return (
    <div className="movies-filter-btn">
      {dynamicBtn.map((item, id) => {
        return <button key={id}>{item}</button>;
      })}
    </div>
  );
}

export default Movies;
