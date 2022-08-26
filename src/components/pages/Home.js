// import "../recommended/recommend.css"
import Banner from "../bannerSection/Banner";
import Section1 from "../recommended/Section1";
import Movies from "../movieCollections/Movies";
import Nav from "../navbarSection/Nav";
import WatchList from "../../components/pages/watchList/WatchList.js";

function Home() {
  return (
    <div>
      <Nav />
      <Banner />
      <Section1 />
      <WatchList />
      <Movies />
    </div>
  );
}
export default Home;
