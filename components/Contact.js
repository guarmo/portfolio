import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Icon,
  Text,
  Link,
  Box,
  HStack,
} from "@chakra-ui/react";

import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  /* Contact */
  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="center"
        id="form"
        my="2rem"
        minH="100vh"
        position="relative"
      >
        <h1 className="subtitle fancy">
          <span>
            <Text fontSize="40px">contacts</Text>
          </span>
        </h1>

        <Box my={4}>
          <Text textAlign="center">
            I'm currently looking for an entry level-job in web dev.
          </Text>
          <Text textAlign="center">
            Feel free to <span className="colorSpan">drop a message </span> or{" "}
            <span className="colorSpan">connect</span> with me on social media
            pages.
          </Text>
        </Box>

        <form
          action="mailto:arm.guarino@gmail.com"
          method="POST"
          enctpye="multipart/form-data"
        >
          <VStack spacing="10px">
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" required />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" required />
            </FormControl>

            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea required />
            </FormControl>

            <Button
              type="submit"
              rightIcon={<IoIosSend />}
              backgroundColor="#00838d"
            >
              Send
            </Button>
          </VStack>
        </form>
        <Box
          position="absolute"
          bottom="0"
          spacing="10px"
          left="50%"
          transform="translateX(-50%)"
        >
          <HStack justifyContent="center" w="100%">
            <Link href="https://twitter.com/_guarmo" target="_blank">
              <Icon
                transition="all .2s ease-in-out"
                _hover={{ transform: "scale(1.2)", color: "#00838d" }}
                transition="all .2s ease-in-out"
                w={10}
                h={10}
                as={AiOutlineTwitter}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/armando-guarino/"
              target="_blank"
            >
              <Icon
                transition="all .2s ease-in-out"
                _hover={{ transform: "scale(1.2)", color: "#00838d" }}
                w={10}
                h={10}
                as={AiFillLinkedin}
              />
            </Link>
            <Link href="https://github.com/guarmo" target="_blank">
              <Icon
                transition="all .2s ease-in-out"
                _hover={{ transform: "scale(1.2)", color: "#00838d" }}
                w={10}
                h={10}
                as={AiFillGithub}
              />
            </Link>
          </HStack>
          <Text my="4" textAlign="center">
            Designed and Coded by{" "}
            <span className="colorSpan">Armando Guarino</span>
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default Contact;
