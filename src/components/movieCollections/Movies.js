import { useContext } from "react";
// import CardData from "../../dataPage/CardData"
import { Link } from "react-router-dom";
import "../movieCollections/MoviesStyle.css";
import AppContext from "../../globalContext/AppProvider";
import { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";

function Movies() {
  const { dynamicBtn, movie, toggleMenu } = useContext(AppContext);

  const [search, setSearch] = useState(" ");

  return (
    <section className="movies-con" id="movies">
      <h2 style={{ marginRight: "auto", marginTop: "20px" }}>Collections</h2>
      <div className="movies-filter-btn">
        {dynamicBtn.map((item, id) => {
          return (
            <button key={id} onClick={() => toggleMenu(item)} type="button">
              {item}
            </button>
          );
        })}
      </div>
      <div className="search-con" id="category">
        <form className="search-form">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search ..."
          />
        </form>
        <p>{movie.length }</p>
      </div>
      <div className="movies-nain-con">
        {movie
          .filter((item) => {
            if (item.title === "") {
              return item;
            } else if (
              item.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return item;
            }
          })
          .map((m) => (
            <MoviesCard key={m.id} {...m} />
          ))}
      </div>
    </section>
  );
}

function MoviesCard({ id, title, img }) {
  const { addWatchList } = useContext(AppContext);
  // console.log(addWatchList)
  return (
    <main className="movies-card-con">
      <div className="add-watchlist-con" onClick={() => addWatchList(id)}>
        <BiAddToQueue className="add-watchlist-icon" />
      </div>
      <Link to={`/dd/${id}`} style={{ color: "whitesmoke" }}>
        <div className="movies-nain-con2">
          <img src={img} alt={title} />
          <p>{title}</p>
        </div>
      </Link>
    </main>
  );
}

export default Movies;
