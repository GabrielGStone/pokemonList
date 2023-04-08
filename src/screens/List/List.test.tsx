import React from "react";
import List from "./List";
import { render, screen, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";

describe("Componente List", () => {
  it("renderiza o título", () => {
    render(<List />);
    const titleElement = screen.getByText(/LISTA/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("carrega a lista de Pokémons", async () => {
    render(<List />);
    const pokemonCardElements = await screen.findAllByRole("article");
    expect(pokemonCardElements.length).toBeGreaterThan(0);
  });

  it("deve chamar o navigate com '/' quando o botão 'go to home' for clicado", () => {
    const navigateMock = useNavigate as jest.Mock;
    render(<List />);
    const button = screen.getByText("go to home <-");
    fireEvent.click(button);
    expect(navigateMock).toHaveBeenCalledWith("/");
  });

  it("deve renderizar o botão 'go to home <-' quando a prop isHome é true", () => {
    render(<List />);
    expect(screen.getByText("voltar para home <-")).toBeInTheDocument();
  });
});
