import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Slide1 from "./components/Slide1";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/slide1" element={<Slide1/>} />
        <Route path="/footer" element={<Footer/>}/>
      </Routes>
    </Router>
  );
}

export default App;