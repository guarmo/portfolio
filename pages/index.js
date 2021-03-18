import { Container } from "@chakra-ui/react";

import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <Container px="2rem" maxW="container.lg">
      <Header />
      <About />
      <Projects />
      <Contact />
    </Container>
  );
}
