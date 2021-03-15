import {
  Link,
  Flex,
  Icon,
  HStack,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { FaMoon, FaRegMoon } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <nav>
      <Flex alignItems="center" justifyContent="space-between">
        <h1 className="logo">ag</h1>
        <ul>
          <HStack spacing="10px" fontWeight="bold">
            <Link href="#top">home.</Link>
            <Link href="#about">about me.</Link>
            <Link href="#projects">projects.</Link>
            <Link href="#form">contact.</Link>
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

export default Navbar;
