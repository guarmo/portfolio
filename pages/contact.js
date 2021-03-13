import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";

const contact = () => {
  return (
    <>
      <h1>Get in touch</h1>
      <form id="form">
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
      <Icon w={10} h={10} as={AiFillTwitterCircle} />
      <Icon w={10} h={10} as={AiFillGithub} />
    </>
  );
};

export default contact;
