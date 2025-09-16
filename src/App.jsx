import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import DetailFood from "./pages/DetailFood";
import MealDetail from "./components/MealDetail";
import ScrollToTop from "./components/ScrollToTop";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="font-poppins">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:name" element={<DetailFood />}></Route>
        <Route path="/meal-detail/:id" element={<MealDetail />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
