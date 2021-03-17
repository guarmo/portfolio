import { Flex, Box, Link, Heading, Text } from "@chakra-ui/react";
import Animation from "../components/Animation";
import Typewriter from "typewriter-effect";

const Header = () => {
  /* Header */
  return (
    <Flex
      position="relative"
      minH="90vh"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent={{ base: "center", md: "space-between" }}
      // justifyContent="center"
    >
      <Flex
        maxW="100%"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        minW="50%"
      >
        <Link
          outlineColor="transparent"
          href="#about"
          className="ca3-scroll-down-link ca3-scroll-down-arrow"
          data-ca3_iconfont="ETmodules"
          data-ca3_icon=""
        ></Link>
        <Box my={4}>
          <Text>I'm a</Text>
          <Heading>Software Developer</Heading>
          <Text>
            interested in developing
            <Typewriter
              options={{
                strings: [
                  "apps that bring social change.",
                  "full-stack applications.",
                  "with open-source technologies.",
                  "and deliver high quality products.",
                  "with agile methodologies.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Text>
        </Box>
      </Flex>
      <Box minW="50%" mt={20}>
        <Animation width="100%" />
      </Box>
    </Flex>
  );
};

export default Header;
