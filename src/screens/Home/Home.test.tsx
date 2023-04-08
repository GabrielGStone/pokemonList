import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import Home from "screens/Home/Home";

describe("Componente Home", () => {
  it("deve renderizar o botão 'go to list ->' quando a prop isHome é false", () => {
    render(<Home />);
    expect(screen.getByText("ir para lista ->")).toBeInTheDocument();
  });

  it("deve chamar o navigate com '/list' quando o botão 'go to list' for clicado", () => {
    const navigateMock = useNavigate as jest.Mock;
    render(<Home />);
    const button = screen.getByText("go to list ->");
    fireEvent.click(button);
    expect(navigateMock).toHaveBeenCalledWith("/list");
  });
});
