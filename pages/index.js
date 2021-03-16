import { Container } from "@chakra-ui/react";

import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <Container maxW="container.lg" mt={4}>
      <Header />
      <About />
      <Projects />
      <Contact />
    </Container>
  );
}
