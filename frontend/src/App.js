import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import FaceRecognition from "./components/FaceRecognition";
import Profile from "./components/Profile";
import Register from "./components/Register";
import About from "./components/About";
import Profiles from "./components/People";
import "./App.css"

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/recognize" element={<FaceRecognition />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/profiles" element={<Profiles />} />
    </Routes>
  </Router>
);

export default App;
