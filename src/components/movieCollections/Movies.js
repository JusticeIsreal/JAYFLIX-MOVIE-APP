import { useContext } from "react";
import "../movieCollections/MoviesStyle.css";
import AppContext from "../../globalContext/AppProvider";

function Movies() {
  const { dynamicBtn, movie, toggleMenu } = useContext(AppContext);

  return (
    <section className="movies-con">
      <div className="movies-filter-btn">
        {dynamicBtn.map((item, id) => {
          return (
            <button key={id} onClick={() => toggleMenu(item)} type="button">
              {item}
            </button>
          );
        })}
      </div>
      <div className="search-con">
        <form className="search-form">
          <input type="text" />
          <button type="button">Search</button>
        </form>
      </div>
      <div className="movies-nain-con">
        {movie.map((m) => (
          <MoviesCard key={m.id} {...m} />
        ))}
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
