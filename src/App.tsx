import React from "react";
import List from "./screens/List";
import Home from "./screens/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<List />} path="/list" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
