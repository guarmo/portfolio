import { Container } from "@chakra-ui/react";
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Container px="2rem">
      <Header />
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
