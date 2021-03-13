import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import Fonts from "../components/Fonts";
import Header from "../components/Header";
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
        <Header />
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
