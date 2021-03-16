import { Flex, Box, Grid, Link } from "@chakra-ui/react";

const Projects = () => {
  /* Projects */
  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="center"
        id="projects"
        minH="100vh"
        position="relative"
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

        <Link
          href="#form"
          class="ca3-scroll-down-link ca3-scroll-down-arrow"
          data-ca3_iconfont="ETmodules"
          data-ca3_icon=""
        ></Link>
      </Flex>
    </>
  );
};

export default Projects;
