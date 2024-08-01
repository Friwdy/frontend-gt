import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Homepages/Homepage";
import ProductListingPage from "./pages/ProductListingPage/ProductListingPage";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<ProductListingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;