import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/pages/Home";
import DeadEndPage from "../src/components/ErrorPage/DeadEndPage";
import RecommendDisplay from "./components/pages/defaultPage/RrecommendDisplay";
import AdminApp from "./components/admin/AdminApp";
import AllMovies from "./components/admin/AllMovies";
import Users from "./components/admin/Users";
// import WatchList from "./components/pages/watchList/WatchList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminApp />}>
            <Route path="/admin/all-movies" element={<AllMovies />}></Route>
            <Route path="/admin/users" element={<Users />}></Route>
          </Route>

          <Route path="/" element={<Home />} />
          <Route path="/dd/:id" element={<RecommendDisplay />} />
          <Route path="*" element={<DeadEndPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
