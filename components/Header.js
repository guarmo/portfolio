import { Flex, Box, Link } from "@chakra-ui/react";
import Animation from "../components/Animation";
import Typewriter from "typewriter-effect";

const Header = () => {
  /* Header */
  return (
    <Flex
      position="relative"
      minH="85vh"
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
      >
        <Link
          outlineColor="transparent"
          href="#about"
          className="ca3-scroll-down-link ca3-scroll-down-arrow"
          data-ca3_iconfont="ETmodules"
          data-ca3_icon=""
        ></Link>
        <Box my={4} minW="60%">
          <h1>Full-stack Software Developer.</h1>
          <p>
            Interested in developing
            <Typewriter
              options={{
                strings: [
                  "apps that bring social change.",
                  "full-stack applications.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </Box>
      </Flex>
      <Box minW="40%" mt={20}>
        <Animation width="100%" />
      </Box>
    </Flex>
  );
};

export default Header;
