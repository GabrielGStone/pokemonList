import { Box, chakra } from "@chakra-ui/react";

export const LayoutBox = chakra(Box, {
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "10px 20%",
    backgroundColor: "#e8e8ff",
    minHeight: "100vh",
  },
});
