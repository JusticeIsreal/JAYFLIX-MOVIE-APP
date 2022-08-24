import { useContext } from "react";
import "../movieCollections/MoviesStyle.css";
import AppContext from "../../globalContext/AppProvider";

function Movies() {
  const { dynamicBtn, initialState } = useContext(AppContext);

  return (
    <section className="movies-con">
      <div className="movies-filter-btn">
        {dynamicBtn.map((item, id) => {
          return <button key={id}>{item}</button>;
        })}
      </div>
      <div>
        <form>
          <input type="text" />
          <button>Search</button>
        </form>
      </div>
      <div>
        {initialState.movies.map((m) => {
          return <MoviesCard key={m.id} {...m} />;
        })}
      </div>
    </section>
  );
}

function MoviesCard({ id, title, img, pref }) {
  return (
    <div>
      <div>{title}</div>
    </div>
  );
}

export default Movies;
