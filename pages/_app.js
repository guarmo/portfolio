import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import Fonts from "../components/Fonts";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

const theme = extendTheme({
  fonts: {
    body: "Roboto Mono",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Container px="2rem" maxW="container.lg">
        <Navbar pos="fixed" top="0" w="100%" />
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
