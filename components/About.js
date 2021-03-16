import { Flex, Box, Icon, Grid, Link, Heading, Text } from "@chakra-ui/react";

import { AiFillHtml5 } from "react-icons/ai";
import {
  DiCss3,
  DiJavascript,
  DiBootstrap,
  DiReact,
  DiMongodb,
} from "react-icons/di";
import { SiTailwindcss, SiRedux } from "react-icons/si";

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
        minH="100vh"
      >
        <Link
          href="#projects"
          className="ca3-scroll-down-link ca3-scroll-down-arrow"
          data-ca3_iconfont="ETmodules"
          data-ca3_icon=""
        ></Link>

        <h1 className="subtitle fancy">
          <span>
            <Text fontSize="50px">about me</Text>
          </span>
        </h1>
        <Box my={4} textAlign="center">
          <h1>I'm an italian Software Developer based in Berlin.</h1>
          <p>
            I mainly develop in JavaScript and these are the technologies I use:{" "}
          </p>
          <Grid
            my={4}
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
            gap={6}
          >
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
    </>
  );
};

export default About;
