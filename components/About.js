import { Flex, Box, Icon, Grid, Link, Heading, Text } from "@chakra-ui/react";

import { AiFillHtml5 } from "react-icons/ai";
import {
  DiCss3,
  DiJavascript,
  DiBootstrap,
  DiReact,
  DiMongodb,
  DiNodejsSmall,
  DiSass,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiRedux,
  SiNextDotJs,
  SiFirebase,
} from "react-icons/si";

const About = () => {
  /* About */
  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        position="relative"
        id="about"
        mb="5rem"
        minH="100vh"
      >
        <h1 className="subtitle fancy">
          <span>
            <Text fontSize="50px">about me</Text>
          </span>
        </h1>
        <Box my={4} textAlign="center">
          <h1>I'm an italian Software Developer based in Berlin.</h1>
          <p>
            I develop in JavaScript and these are the main {/* @todo */}
            <span color="red">technologies</span> I use:{" "}
          </p>
          <Grid
            my={4}
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
            gap={6}
          >
            <Flex flexDirection="column" alignItems="center">
              <Icon
                transition="all .2s ease-in-out"
                _hover={{ transform: "scale(1.2)" }}
                w="100%"
                h="50px"
                as={AiFillHtml5}
              />
              <h1>HTML5</h1>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Icon
                transition="all .2s ease-in-out"
                _hover={{ transform: "scale(1.2)" }}
                w="100%"
                h="50px"
                as={DiCss3}
              />
              <h1>CSS3</h1>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Icon
                transition="all .2s ease-in-out"
                _hover={{ transform: "scale(1.2)" }}
                w="100%"
                h="50px"
                as={DiJavascript}
              />
              <h1>JavaScript</h1>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Icon
                transition="all .2s ease-in-out"
                _hover={{ transform: "scale(1.2)" }}
                w="100%"
                h="50px"
                as={SiTailwindcss}
              />
              <h1>TailwindCSS</h1>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Icon
                transition="all .2s ease-in-out"
                _hover={{ transform: "scale(1.2)" }}
                w="100%"
                h="50px"
                as={DiBootstrap}
              />
              <h1>Bootstrap</h1>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Icon
                transition="all .2s ease-in-out"
                _hover={{ transform: "scale(1.2)" }}
                w="100%"
                h="50px"
                as={DiSass}
              />
              <h1>Sass</h1>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Icon
                transition="all .2s ease-in-out"
                _hover={{ transform: "scale(1.2)" }}
                w="100%"
                h="50px"
                as={DiReact}
              />
              <h1>React</h1>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Icon
                transition="all .2s ease-in-out"
                _hover={{ transform: "scale(1.2)" }}
                w="100%"
                h="50px"
                as={SiNextDotJs}
              />
              <h1>Nextjs</h1>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Icon
                transition="all .2s ease-in-out"
                _hover={{ transform: "scale(1.2)" }}
                w="100%"
                h="50px"
                as={SiRedux}
              />
              <h1>Redux</h1>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Icon
                transition="all .2s ease-in-out"
                _hover={{ transform: "scale(1.2)" }}
                w="100%"
                h="50px"
                as={DiMongodb}
              />
              <h1>MongoDB</h1>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Icon
                transition="all .2s ease-in-out"
                _hover={{ transform: "scale(1.2)" }}
                w="100%"
                h="50px"
                as={DiNodejsSmall}
              />
              <h1>Nodejs</h1>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Icon
                transition="all .2s ease-in-out"
                _hover={{ transform: "scale(1.2)" }}
                w="100%"
                h="50px"
                as={SiFirebase}
              />
              <h1>Firebase</h1>
            </Flex>
          </Grid>
        </Box>
      </Flex>
    </>
  );
};

export default About;
