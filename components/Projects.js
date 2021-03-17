import { Flex, Box, Grid, Link, Text } from "@chakra-ui/react";

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
        <h1 className="subtitle fancy">
          <span>
            <Text fontSize="50px">projects</Text>
          </span>
        </h1>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          gap={6}
        >
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
    </>
  );
};

export default Projects;
