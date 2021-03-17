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
        my="5rem"
        minH="100vh"
      >
        <h1 className="subtitle fancy">
          <span>
            <Text fontSize="50px">contacts</Text>
          </span>
        </h1>
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
              <Textarea placeholder="Enter your message here..." required />
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
      </Flex>
      <Link href="https://twitter.com/_guarmo" target="_blank">
        <Icon
          transition="all .2s ease-in-out"
          _hover={{ transform: "scale(1.2)" }}
          transition="all .2s ease-in-out"
          _hover={{ transform: "scale(1.2)" }}
          w={10}
          h={10}
          as={AiOutlineTwitter}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/armando-guarino/" target="_blank">
        <Icon
          transition="all .2s ease-in-out"
          _hover={{ transform: "scale(1.2)" }}
          w={10}
          h={10}
          as={AiFillLinkedin}
        />
      </Link>
      <Link href="https://github.com/guarmo" target="_blank">
        <Icon
          transition="all .2s ease-in-out"
          _hover={{ transform: "scale(1.2)" }}
          w={10}
          h={10}
          as={AiFillGithub}
        />
      </Link>
    </>
  );
};

export default Contact;
