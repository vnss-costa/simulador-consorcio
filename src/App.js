import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import Simulate from "./pages/Simulate";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/simulate/" element={<Simulate />}/>
          <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
  );
}

export default App;