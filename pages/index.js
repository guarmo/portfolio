import {
  Image,
  Button,
  ButtonGroup,
  Flex,
  Box,
  Container,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container minH="90vh" maxW="container.lg" mt={4} border="2px solid red">
      <Flex>
        <Box maxW="50%">
          <h1>Full-stack Software Developer.</h1>
          <p>
            Interested in developing web applications that bring social change.{" "}
          </p>
          <Button colorScheme="blue">Button</Button>
        </Box>
        <Image
          src="/images/pic.jpg"
          fallbackSrc="placeholdit.com/200x200"
          alt="A Placeholder Image"
          width="250px"
        />
      </Flex>
    </Container>
  );
}
