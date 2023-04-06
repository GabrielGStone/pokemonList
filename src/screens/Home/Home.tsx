import { Image, Text } from "@chakra-ui/react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { Container, Title } from "./styles";
import pokeball from "../../assets/pokeball.png";

const Home = () => {
  return (
    <>
      <Layout>
        <Container>
          <Header isHome />
          <Title>Pokedex - Lista de Pokemons</Title>
          <Text>Bem-vindo à Pokedex! Explore e salve seu pokemon favorito</Text>
          <Image src={pokeball} />
        </Container>
      </Layout>
    </>
  );
};

export default Home;
