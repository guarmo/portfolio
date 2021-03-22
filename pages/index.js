import { Container } from "@chakra-ui/react";
import Head from "next/head";

import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Armando Guarino | Portfolio</title>
        {/* <meta charset="UTF-8" />
        <meta
          name="description"
          content="Armando Guarino's personal portfolio."
        />
        <meta
          name="keywords"
          content="Armando Guarino, guarino, guarmo, portfolio"
        />
        <meta name="author" content="Armando Guarino" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <meta property="og:url" content="https://www.armandoguarino.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Armando Guarino | Portfolio" />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Armando Guarino's personal portfolio."
        />
        <meta property="og:image" content={"https://ibb.co/yYhBmbN"} />
      </Head>
      <Container px="2rem" maxW="container.lg">
        <Header />
        <About />
        <Projects />
        <Contact />
      </Container>
    </div>
  );
}
