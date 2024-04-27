import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Nav from "./components/Nav";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Home from "./components/Home";
import "./App.css";
import "./styles/nav.css";
import "./styles/search.css";
import "./styles/jobs.css";
import "./styles/register.css";
import "./styles/login.css";
import "./styles/home.css";
import "./styles/footer.css";
const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
