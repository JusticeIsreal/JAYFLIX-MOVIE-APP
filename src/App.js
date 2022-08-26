import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/pages/Home";
import DeadEndPage from "../src/components/ErrorPage/DeadEndPage";
import RecommendDisplay from "./components/pages/defaultPage/RrecommendDisplay";
// import WatchList from "./components/pages/watchList/WatchList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dd/:id" element={<RecommendDisplay />} />
          <Route path="*" element={<DeadEndPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
