import { Box, Text, chakra } from "@chakra-ui/react";

export const Container = chakra(Box, {
  baseStyle: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export const Title = chakra(Text, {
  baseStyle: { fontSize: 32, fontWeight: 600, marginY: "16px" },
});
