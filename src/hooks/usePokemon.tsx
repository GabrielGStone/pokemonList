import useRequest from "./useRequest";

const usePokemon = () => {
  const { get } = useRequest();

  const getPokemon = async (endpoint?: string) => {
    const res = endpoint
      ? await get(endpoint)
      : await get("https://pokeapi.co/api/v2/pokemon/");
    return res;
  };

  return { getPokemon };
};

export default usePokemon;
