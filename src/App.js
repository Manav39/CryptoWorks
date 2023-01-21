import "./App.css";
import { Nav, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Price from "./components/Price";
import News from "./components/News";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Currency from "./components/Currency";
import CoinPage from "./components/CoinPage";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/price" element={<Price />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/currency" element={<Currency />} />
          <Route path="/currency/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
