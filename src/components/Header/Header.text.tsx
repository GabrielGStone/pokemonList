import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("<Header />", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("renders button with text 'go to list ->' when isHome prop is false", () => {
    const { getByText } = render(<Header />);
    expect(getByText("go to list ->")).toBeInTheDocument();
  });

  test("renders button with text 'go to home <-' when isHome prop is true", () => {
    const { getByText } = render(<Header isHome />);
    expect(getByText("go to home <-")).toBeInTheDocument();
  });

  test("clicking button calls useNavigate with '/list' when isHome prop is false", () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);
    const { getByText } = render(<Header />);
    const button = getByText("go to list ->");
    userEvent.click(button);
    expect(navigateMock).toHaveBeenCalledWith("/list");
  });

  test("clicking button calls useNavigate with '/' when isHome prop is true", () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);
    const { getByText } = render(<Header isHome />);
    const button = getByText("go to home <-");
    userEvent.click(button);
    expect(navigateMock).toHaveBeenCalledWith("/");
  });
});
