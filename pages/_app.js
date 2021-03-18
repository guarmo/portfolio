import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Fonts from "../components/Fonts";
import "../styles/globals.css";

const theme = extendTheme({
  fonts: {
    body: "Roboto Mono",
    heading: "Roboto Mono",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
