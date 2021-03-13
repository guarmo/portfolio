import { Link, Flex, Icon, HStack } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const Header = () => {
  return (
    <nav>
      <Flex alignItems="center" justifyContent="space-between" color="gray">
        <h1>AG</h1>
        <ul>
          <HStack spacing="10px" fontWeight="bold">
            <Link href="/work">
              <a>work.</a>
            </Link>
            <Link href="/about">
              <a>about me.</a>
            </Link>
            <Link href="/contact">
              <a>contact.</a>
            </Link>
          </HStack>
        </ul>
      </Flex>
    </nav>
  );
};

export default Header;
