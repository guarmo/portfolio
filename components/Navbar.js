import React from "react";
import {
  Link,
  Flex,
  Icon,
  HStack,
  VStack,
  useColorMode,
  UnorderedList,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");

  return (
    <nav>
      <Flex alignItems="center" justifyContent="space-between">
        <Icon
          cursor="pointer"
          display={{ base: "block", md: "none" }}
          w={8}
          h={8}
          as={GiHamburgerMenu}
          onClick={onOpen}
        >
          Open
        </Icon>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent p={4}>
              <Icon
                cursor="pointer"
                onClick={onClose}
                _hover={{ color: "#00838d" }}
                w={8}
                h={8}
                as={AiOutlineClose}
              />
              <DrawerBody>
                <Flex
                  flexDirection="col"
                  alignItems="center"
                  justifyContent="center"
                  h="100%"
                >
                  <VStack spacing="40px" fontWeight="bold">
                    <Link
                      _hover={{ textDecoration: "underline", color: "#00838d" }}
                      href="#top"
                    >
                      home.
                    </Link>
                    <Link
                      _hover={{ textDecoration: "underline", color: "#00838d" }}
                      href="#about"
                    >
                      about me.
                    </Link>
                    <Link
                      _hover={{ textDecoration: "underline", color: "#00838d" }}
                      href="#projects"
                    >
                      projects.
                    </Link>
                    <Link
                      _hover={{ textDecoration: "underline", color: "#00838d" }}
                      href="#form"
                    >
                      contacts.
                    </Link>
                  </VStack>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
        <h1 className="logo">ag</h1>
        <UnorderedList display={{ base: "none", md: "block" }}>
          <HStack spacing="10px" fontWeight="bold">
            <Link
              _hover={{ textDecoration: "underline", color: "#00838d" }}
              href="#top"
            >
              home.
            </Link>
            <Link
              _hover={{ textDecoration: "underline", color: "#00838d" }}
              href="#about"
            >
              about me.
            </Link>
            <Link
              _hover={{ textDecoration: "underline", color: "#00838d" }}
              href="#projects"
            >
              projects.
            </Link>
            <Link
              _hover={{ textDecoration: "underline", color: "#00838d" }}
              href="#form"
            >
              contacts.
            </Link>
          </HStack>
        </UnorderedList>
      </Flex>
    </nav>
  );
};

export default Navbar;
