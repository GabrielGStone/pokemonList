import { Box, Card, chakra, Image, Text } from "@chakra-ui/react";

export const GridCard = chakra(Box, {
  baseStyle: {
    width: "100%",
    paddingX: "2%",
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
  },
});

export const PokemonCard = chakra(Card, {
  baseStyle: {
    display: "flex",
    textAlign: "center",
    width: "100%",
    cursor: "pointer",
    border: "1px solid #000",
    __hover: {
      width: "165px",
    },
  },
});

export const Title = chakra(Text, {
  baseStyle: {
    fontWeight: 600,
    textAlign: "center",
    marginY: "40px",
    fontSize: 24,
  },
});

export const PokemonText = chakra(Text, {
  baseStyle: {
    fontSize: 24,
  },
});

export const FavoriteImage = chakra(Image, {
  baseStyle: { position: "absolute", width: "30px" },
});
