import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./screens/Home";
import List from "./screens/List";

describe("<App />", () => {
  test("renders home component when path is /", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByText(/HOME/i)).toBeInTheDocument();
  });

  test("renders list component when path is /list", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByText(/LISTA/i)).toBeInTheDocument();
  });
});
