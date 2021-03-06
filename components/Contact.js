import { useState } from "react";
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
  createStandaloneToast,
} from "@chakra-ui/react";

import emailjs from "emailjs-com";

import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  const [sendEmail, setSendEmail] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toast = createStandaloneToast();

  const [loading, setLoading] = useState(false);

  const { name, email, message } = sendEmail;

  const templateParams = {
    from_name: name,
    message,
    to_name: "Armando Guarino",
    reply_to: email,
  };

  const onChange = (e) =>
    setSendEmail({ ...sendEmail, [e.target.name]: e.target.value });

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE,
        templateParams,
        process.env.NEXT_PUBLIC_EMAIL_USER
      )
      .then(
        (response) => {
          toast({
            title: "Message sent.",
            description: "Thanks for getting in touch!",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
        },
        (err) => {
          toast({
            title: "Oops.",
            description: "Something went wrong!",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        }
      );

    setLoading(false);

    setSendEmail({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Flex
      flexDirection="column"
      id="form"
      minH="100vh"
      py={6}
      position="relative"
    >
      <h1 className="subtitle fancy">
        <span>
          <Text fontSize="40px">contacts</Text>
        </span>
      </h1>

      <Box textAlign="center" mt={12}>
        <Text>
          I'm currently working as a software developer at 
          <Link> 
            <a href="https://berlin-byt.es/" target="_blank" className="colorSpan"> Berlin Bytes</a>
          </Link>.
        </Text>
        <Text>
          Feel free to <span>drop a message </span> or{" "}
          <span>connect</span> with me on social media.
        </Text>
      </Box>

      <Box my="auto" py={6}>
        <form onSubmit={(e) => onFormSubmit(e)}>
          <VStack spacing="10px">
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                required
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
            </FormControl>

            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea
                name="message"
                value={message}
                onChange={onChange}
                required
              />
            </FormControl>
          </VStack>
          {!loading ? (
            <Button
              type="submit"
              rightIcon={<IoIosSend />}
              backgroundColor="#00838d"
              ml="50%"
              transform="translateX(-50%)"
            >
              Send
            </Button>
          ) : (
            <Button
              isLoading
              rightIcon={<IoIosSend />}
              backgroundColor="#00838d"
              ml="50%"
              transform="translateX(-50%)"
            >
              Send{" "}
            </Button>
          )}
        </form>
      </Box>

      <Box mx="auto" spacing="10px">
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
        <Text my={2} textAlign="center">
          Designed and Coded by{" "}
          <span className="colorSpan">Armando Guarino</span>
        </Text>
      </Box>
    </Flex>
  );
};

export default Contact;
