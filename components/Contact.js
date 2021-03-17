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
  BeatLoader,
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

  const [loading, setLoading] = useState(false);

  const { name, email, message } = sendEmail;

  const onChange = (e) =>
    setSendEmail({ ...sendEmail, [e.target.name]: e.target.value });

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // await emailjs
    //   .send(
    //     "service_f0yxx3l",
    //     "template_ac2n19y",
    //     sendEmail,
    //     "user_mFKy74qndZlfDQh6mnohG"
    //   )
    //   .then(
    //     (response) => {
    //       console.log("SUCCESS!", response.status, response.text);
    //     },
    //     (err) => {
    //       console.log("FAILED...", err);
    //     }
    //   );

    setTimeout(() => {
      setLoading(false);
    }, 3000);

    setSendEmail({
      name: "",
      email: "",
      message: "",
    });

    console.log(sendEmail);
  };

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
            <span className="colorSpan">connect</span> with me on social media.
          </Text>
        </Box>

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
            >
              Send
            </Button>
          ) : (
            <Button
              isLoading
              rightIcon={<IoIosSend />}
              backgroundColor="#00838d"
            >
              Send{" "}
            </Button>
          )}
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
