import "./App.css";
import { Nav, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Price from "./components/Price";
import News from "./components/News";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CoinDetails from "./components/CoinDetails";
const App = () => {
  return (
    
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/price" element={<Price />}>
          </Route>
          <Route path="/price/:coinId" element={<CoinDetails/>}/>
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
};

export default App;
