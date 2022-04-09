import React from "react";
import "./App.css";
import { Home, Navbar, Checkout, ListingPage } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route path="/listing/:id" element={<ListingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
