import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Icon,
} from "@chakra-ui/react";

import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  /* Contact */
  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="center"
        id="form"
        minH="100vh"
      >
        <h1>Contact</h1>
        <form>
          <VStack spacing="10px">
            <FormControl id="email">
              <FormLabel>Name</FormLabel>
              <Input type="email" />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Enter your message here..." />
            </FormControl>

            <Button colorScheme="blue">Button</Button>
          </VStack>
        </form>
      </Flex>
      <Icon w={10} h={10} as={AiOutlineTwitter} />
      <Icon w={10} h={10} as={AiFillLinkedin} />
      <Icon w={10} h={10} as={AiFillGithub} />
    </>
  );
};

export default Contact;
