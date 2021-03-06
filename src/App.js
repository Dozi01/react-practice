import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Group from "./routes/Group";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import styles from "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/page/:group" element={<Group />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
