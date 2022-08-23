import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/pages/Home";
import Nav from "../src/components/navbarSection/Nav";
import Section1 from "../src/components/recommended/Section1";
import DeadEndPage from "../src/components/ErrorPage/DeadEndPage";
import RecommendDisplay from "./components/pages/defaultPage/RrecommendDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
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
