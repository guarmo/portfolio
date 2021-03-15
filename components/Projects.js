import { Flex, Box, Grid } from "@chakra-ui/react";

const Projects = () => {
  /* Projects */
  return (
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
    </Flex>
  );
};

export default Projects;
