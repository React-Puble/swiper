//App.js
import React from "react";
import { useRouter } from "next/router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Slide from "./slide";

function App() {
  const router = useRouter();

  return (
    <div className="App">
      <Routes>
        <Route path="/slide" element={<Slide />} />
      </Routes>
    </div>
  );
}

export default App;
