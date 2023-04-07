import { renderHook, act } from "@testing-library/react-hooks";
import useLocalStorage from "./useLocalStorage";

describe("useLocalStorage", () => {
  beforeEach(() => {
    // Limpa o localStorage antes de cada teste
    window.localStorage.clear();
  });

  it("deve retornar o valor inicial quando não há valor no localStorage", () => {
    const { result } = renderHook(() =>
      useLocalStorage("my-key", "initial-value")
    );
    expect(result.current[0]).toEqual("initial-value");
  });

  it("deve retornar o valor armazenado no localStorage quando existe", () => {
    window.localStorage.setItem("my-key", JSON.stringify("stored-value"));

    const { result } = renderHook(() =>
      useLocalStorage("my-key", "initial-value")
    );
    expect(result.current[0]).toEqual("stored-value");
  });

  it("deve atualizar o valor no localStorage quando o valor é alterado", () => {
    const { result } = renderHook(() =>
      useLocalStorage("my-key", "initial-value")
    );

    act(() => {
      result.current[1]("new-value");
    });

    expect(result.current[0]).toEqual("new-value");
    expect(window.localStorage.getItem("my-key")).toEqual(
      JSON.stringify("new-value")
    );
  });
});
