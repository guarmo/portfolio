import { Button, Flex, Box, Link } from "@chakra-ui/react";
import Animation from "../components/Animation";

const Header = () => {
  /* Header */
  return (
    <Flex
      position="relative"
      minH="85vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        maxW="60%"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Link
          href="#about"
          class="ca3-scroll-down-link ca3-scroll-down-arrow"
          data-ca3_iconfont="ETmodules"
          data-ca3_icon=""
        ></Link>
        <Box my={4}>
          <h1>Full-stack Software Developer.</h1>
          <p>
            Interested in developing web applications that bring social change.{" "}
          </p>
        </Box>
        <Button colorScheme="blue">Button</Button>
      </Flex>
      <Box minW="30%">
        <Animation width="100%" />
      </Box>
    </Flex>
  );
};

export default Header;
