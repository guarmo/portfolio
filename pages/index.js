import {
  Image,
  Button,
  Flex,
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Icon,
  Grid,
} from "@chakra-ui/react";

import {
  AiOutlineTwitter,
  AiFillGithub,
  AiFillHtml5,
  AiFillLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiJavascript,
  DiBootstrap,
  DiReact,
  DiMongodb,
} from "react-icons/di";
import { SiTailwindcss, SiRedux } from "react-icons/si";
import Animation from "../components/Animation";

export default function Home() {
  return (
    <Container maxW="container.lg" mt={4}>
      {/* Header */}
      <Flex minH="85vh" justifyContent="center" alignItems="center">
        <Flex
          maxW="60%"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box my={4}>
            <h1>Full-stack Software Developer.</h1>
            <p>
              Interested in developing web applications that bring social
              change.{" "}
            </p>
          </Box>
          <Button colorScheme="blue">Button</Button>
        </Flex>
        <Box minW="30%">
          <Animation width="100%" />
        </Box>
      </Flex>

      {/* About */}
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        id="about"
        minH="100vh"
      >
        <h1>About</h1>
        <Box my={4}>
          <h1>I'm an italian Software Developer based in Berlin.</h1>
          <p>
            I mainly develop in JavaScript and these are the technologies I use:{" "}
          </p>
          <Grid my={4} templateColumns="repeat(4, 1fr)" gap={6}>
            <Flex flexDirection="column" alignItems="center">
              <Icon w="100%" h="50" as={AiFillHtml5} />
              <h1>HTML5</h1>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Icon w="100%" h="50" as={DiCss3} />
              <h1>CSS3</h1>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Icon w="100%" h="50" as={DiJavascript} />
              <h1>JavaScript</h1>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Icon w="100%" h="50" as={SiTailwindcss} />
              <h1>TailwindCSS</h1>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Icon w="100%" h="50" as={DiBootstrap} />
              <h1>Bootstrap</h1>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Icon w="100%" h="50" as={DiReact} />
              <h1>React</h1>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Icon w="100%" h="50" as={SiRedux} />
              <h1>Redux</h1>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Icon w="100%" h="50" as={DiMongodb} />
              <h1>MongoDB</h1>
            </Flex>
          </Grid>
        </Box>
      </Flex>

      {/* Projects */}
      <Flex
        flexDirection="column"
        justifyContent="center"
        id="projects"
        minH="100vh"
      >
        <h1>Projects</h1>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <Box w="100%" h="200" border=" 2px solid gray" />
          <Box w="100%" h="200" border=" 2px solid gray" />
          <Box w="100%" h="200" border=" 2px solid gray" />
          <Box w="100%" h="200" border=" 2px solid gray" />
          <Box w="100%" h="200" border=" 2px solid gray" />
          <Box w="100%" h="200" border=" 2px solid gray" />
          <Box w="100%" h="200" border=" 2px solid gray" />
          <Box w="100%" h="200" border=" 2px solid gray" />
        </Grid>
      </Flex>

      {/* Contact */}
      <Flex
        flexDirection="column"
        justifyContent="center"
        id="form"
        minH="100vh"
      >
        <h1>Contact</h1>
        <form>
          <VStack spacing="10px">
            <FormControl id="email">
              <FormLabel>Name</FormLabel>
              <Input type="email" />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Enter your message here..." />
            </FormControl>

            <Button colorScheme="blue">Button</Button>
          </VStack>
        </form>
      </Flex>
      <Icon w={10} h={10} as={AiOutlineTwitter} />
      <Icon w={10} h={10} as={AiFillLinkedin} />
      <Icon w={10} h={10} as={AiFillGithub} />
    </Container>
  );
}
