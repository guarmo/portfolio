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
  GridItem,
} from "@chakra-ui/react";

import { AiFillTwitterCircle, AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import {
  DiCss3,
  DiJavascript,
  DiBootstrap,
  DiReact,
  DiMongodb,
} from "react-icons/di";
import { SiTailwindcss, SiRedux } from "react-icons/si";

export default function Home() {
  return (
    <Container maxW="container.lg" mt={4}>
      {/* Header */}
      <Flex minH="60vh">
        <Flex
          maxW="50%"
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
        <Flex justifyContent="center" alignItems="center" minW="50%">
          <Image
            src="/images/pic.jpg"
            fallbackSrc="placeholdit.com/200x200"
            alt="A Placeholder Image"
            width="250px"
          />
        </Flex>
      </Flex>

      {/* About */}
      <Box id="about" minH="60vh">
        <h1>About</h1>
        <Box my={4}>
          <h1>I'm an italian Software Developer based in Berlin.</h1>
          <p>
            I mainly develop in JavaScript and these are the technologies I use:{" "}
          </p>
          <Grid my={4} templateColumns="repeat(4, 1fr)" gap={6}>
            <Icon w="100%" h="100" as={AiFillHtml5} />
            <Icon w="100%" h="100" as={DiCss3} />
            <Icon w="100%" h="100" as={DiJavascript} />
            <Icon w="100%" h="100" as={SiTailwindcss} />
            <Icon w="100%" h="100" as={DiBootstrap} />
            <Icon w="100%" h="100" as={DiReact} />
            <Icon w="100%" h="100" as={DiMongodb} />
            <Icon w="100%" h="100" as={SiRedux} />
          </Grid>
        </Box>
      </Box>

      {/* Projects */}
      <Box id="projects" minH="60vh">
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
      </Box>

      {/* Contact */}
      <Box id="form" minH="60vh">
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

        <Icon w={10} h={10} as={AiFillTwitterCircle} />
        <Icon w={10} h={10} as={AiFillGithub} />
      </Box>
    </Container>
  );
}
