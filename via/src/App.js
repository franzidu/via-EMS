import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Story from "./pages/Story/Story.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="story" exact element={<Story />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
