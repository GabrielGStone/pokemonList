import useLocalStorage from "../../hooks/useLocalStorage";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import usePokemon from "../../hooks/usePokemon";
import { RootState } from "../../state";
import { favoriteActions } from "../../state/actions";

const List = () => {
  const dispatch = useDispatch();
  const { getPokemon } = usePokemon();
  const [pokemons, setPokemons] = useState<responseType | undefined>();
  const [favorites, setFavorites] = useLocalStorage<string[]>("favorites", []);

  const favoritePokemons = useSelector(
    (state: RootState) => state.favorite.favorites
  );

  const pokemonList = async () => {
    const res = await getPokemon();
    setPokemons(res);
  };

  useEffect(() => {
    pokemonList();
    //eslint-disable-next-line
  }, []);

  const getNextPokemons = async () => {
    const nextPokemons = await getPokemon(pokemons?.next);
    setPokemons({
      ...nextPokemons,
      results: [...(pokemons?.results || []), ...nextPokemons.results],
    });
  };

  const addFavorite = (name: string) => {
    dispatch(favoriteActions.toggleFavorite(name));

    setFavorites(
      favorites.includes(name)
        ? favorites.filter((favorite) => favorite !== name)
        : [...favorites, name]
    );
  };

  return (
    <>
      <Layout>
        <Header />
        <h1>LISTA</h1>
        {/* <button onClick={() => dispatch(favoriteActions.removeAllFavorites())}>
          remover favoritos
        </button>  (funciona apenas para o persist do reduxtoolkit feito anteriormente*/}
        <InfiniteScroll
          dataLength={pokemons?.results.length || 10}
          next={getNextPokemons}
          hasMore={true}
          loader={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "56px",
                fontSize: "16px",
                fontFamily: "Montserrat",
                fontWeight: 500,
              }}
            >
              carregando...
            </div>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {pokemons &&
            pokemons.results.map((data: any) => {
              const { name } = data;
              return (
                <div
                  style={{
                    width: 100,
                    margin: 8,
                    cursor: "pointer",
                    border: "1px solid #000",
                    fontWeight: favorites.includes(name) ? "600" : "300",
                    backgroundColor: favorites.includes(name)
                      ? "#eaff00"
                      : "#fff",
                  }}
                  onClick={() => addFavorite(name)}
                  key={name}
                >
                  {name}
                </div>
              );
            })}
        </InfiniteScroll>
      </Layout>
    </>
  );
};

export default List;
