import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../src/components/navbarSection/Nav";
import Banner from "../src/components/bannerSection/Banner";
import Section1 from "../src/components/recommended/Section1";
import DeadEndPage from "../src/components/ErrorPage/DeadEndPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Banner />
        <Section1 />
        <Routes>
          <Route path="Banner" element={<Banner />} />
          <Route path="about" element={<Section1 />} />
          <Route path="*" element={<DeadEndPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
