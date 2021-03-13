import { Image, Button, Flex, Box, Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container minH="90vh" maxW="container.lg" mt={4}>
      <Flex>
        <Flex
          maxW="50%"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          border="2px solid red"
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
        <Flex border="2px solid red" justifyContent="center" minW="50%">
          <Image
            src="/images/pic.jpg"
            fallbackSrc="placeholdit.com/200x200"
            alt="A Placeholder Image"
            width="250px"
          />
        </Flex>
      </Flex>
    </Container>
  );
}
