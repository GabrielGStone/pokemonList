import { Box, chakra } from "@chakra-ui/react";

export const LayoutBox = chakra(Box, {
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "10px 20%",
    backgroundColor: "#eef",
    minHeight: "100vh",
  },
});
