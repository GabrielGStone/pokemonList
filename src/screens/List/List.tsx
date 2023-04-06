import useLocalStorage from "../../hooks/useLocalStorage";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import usePokemon from "../../hooks/usePokemon";
// import { RootState } from "../../state";
import { favoriteActions } from "../../state/actions";
import { Image, Spinner, Text } from "@chakra-ui/react";
import {
  FavoriteImage,
  GridCard,
  PokemonCard,
  PokemonText,
  Title,
} from "./styles";
import addLeadingZeros from "utils/addLeadingZeros";
import "./styles.css";
import star from "../../assets/pokeball.png";

const List = () => {
  const dispatch = useDispatch();
  const { getPokemon } = usePokemon();
  const [pokemons, setPokemons] = useState<responseType | undefined>();
  const [favorites, setFavorites] = useLocalStorage<string[]>("favorites", []);

  // const favoritePokemons = useSelector(
  //   (state: RootState) => state.favorite.favorites
  // );

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
        <Title>LISTA</Title>
        {/* <Button onClick={() => dispatch(favoriteActions.removeAllFavorites())}>
          remover favoritos
        </Button>  (funciona apenas para o persist do reduxtoolkit feito anteriormente*/}
        <InfiniteScroll
          dataLength={pokemons?.results.length || 10}
          next={getNextPokemons}
          hasMore={true}
          loader={<Spinner />}
          endMessage={
            <Text style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </Text>
          }
        >
          {pokemons && (
            <GridCard className="pokemonCard">
              {pokemons.results.map((data: any, index: number) => {
                const { name } = data;
                const pokemonLink = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${addLeadingZeros(
                  index + 1
                )}.png`;
                return (
                  <PokemonCard
                    style={{
                      fontWeight: favorites.includes(name) ? "600" : "300",
                      backgroundColor: favorites.includes(name)
                        ? "#e5f594"
                        : "#fff",
                    }}
                    _hover={{ width: "103%", height: "103%" }}
                    onClick={() => addFavorite(name)}
                    key={name}
                  >
                    {favorites.includes(name) && <FavoriteImage src={star} />}
                    <Image src={pokemonLink} alt={name} />
                    <PokemonText>{name}</PokemonText>
                  </PokemonCard>
                );
              })}
            </GridCard>
          )}
        </InfiniteScroll>
      </Layout>
    </>
  );
};

export default List;
