import {
  Link,
  Flex,
  Icon,
  HStack,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { FaMoon, FaRegMoon } from "react-icons/fa";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <nav>
      <Flex alignItems="center" justifyContent="space-between">
        <h1 className="logo">ag</h1>
        <ul>
          <HStack spacing="10px" fontWeight="bold">
            <Link href="/">
              <a>home.</a>
            </Link>
            <Link href="/about">
              <a>about me.</a>
            </Link>
            <Link href="/projects">
              <a>projects.</a>
            </Link>
            <Link href="/contact">
              <a>contact.</a>
            </Link>
          </HStack>
        </ul>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? (
            <Icon as={FaRegMoon} />
          ) : (
            <Icon as={FaMoon} />
          )}
        </Button>
      </Flex>
    </nav>
  );
};

export default Header;
