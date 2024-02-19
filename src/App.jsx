import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import Bucin from "./bucin";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bucin" element={<Bucin/>} />
        <Route path="*" element={`No page`} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
