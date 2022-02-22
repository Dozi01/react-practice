import { useState, useEffect } from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import styles from "./styles.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
