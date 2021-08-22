import {
  Flex,
  Box,
  Grid,
  Link,
  Text,
  Heading,
  Badge,
  HStack,
} from "@chakra-ui/react";

const Projects = () => {
  return (
    <Flex
      flexDirection="column"
      id="projects"
      position="relative"
      minH="100vh"
      py={6}
    >
      <h1 className="subtitle fancy">
        <span>
          <Text fontSize="40px">projects</Text>
        </span>
      </h1>

      <Box textAlign="center" my={12}>
        <Text>Here's a list of projects I worked on lately.</Text>
        <Text>
          Check out my{" "}
          <Link
            color="#00838d !important"
            href="https://github.com/guarmo"
            target="_blank"
          >
            Github
          </Link>{" "}
          to see more.
        </Text>
      </Box>

      <Grid
        templateColumns={{
          md: "repeat(3, 1fr)",
          sm: "repeat(2, 1fr)",
        }}
        gap={6}
        m="auto"
      >
        <Box className="card" minH="300px">
          <Flex
            minH="100%"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Heading size="lg">This page</Heading>
              <Text my="4">My personal portfolio.</Text>
              <HStack>
                <Badge colorScheme="orange">Nextjs</Badge>
                <Badge colorScheme="teal">Chakra UI</Badge>
              </HStack>
            </Box>
            <Link href="https://github.com/guarmo/portfolio" target="_blank">
              Code
            </Link>
          </Flex>
          <Box className="go-corner">
            <Link
              className="go-arrow"
              href="https://www.armandoguarino.dev/"
              target="_blank"
            >
              →
            </Link>
          </Box>
        </Box>

        <Box className="card" minH="300px">
          <Flex
            minH="100%"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Heading size="lg">MyUnsplash</Heading>
              <Text my="4">An Unsplash clone, with a Masonry layout.</Text>
              <HStack>
                <Badge colorScheme="pink">Tailwind</Badge>
                <Badge colorScheme="purple">React</Badge>
              </HStack>
              <HStack mt="1">
                <Badge colorScheme="blue">MongoDB</Badge>
                <Badge colorScheme="red">Express</Badge>
              </HStack>
            </Box>

            <Link
              href="https://github.com/guarmo/DevChallenges/tree/main/my-unsplash"
              target="_blank"
            >
              Code
            </Link>
          </Flex>
          <Box className="go-corner">
            <Link
              className="go-arrow"
              href="https://secret-badlands-45247.herokuapp.com/"
              target="_blank"
            >
              →
            </Link>
          </Box>
        </Box>

        <Box className="card" minH="300px">
          <Flex
            minH="100%"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Heading size="lg">Image Uploader</Heading>
              <Text my="4">An Image Uploader application.</Text>
              <HStack>
                <Badge colorScheme="yellow">Firebase</Badge>
                <Badge colorScheme="purple">React</Badge>
              </HStack>
            </Box>

            <Link
              href="https://github.com/guarmo/DevChallenges/tree/main/image-uploader"
              target="_blank"
            >
              Code
            </Link>
          </Flex>
          <Box className="go-corner">
            <Link
              className="go-arrow"
              href="https://hardcore-shirley-3a9287.netlify.app/"
              target="_blank"
            >
              →
            </Link>
          </Box>
        </Box>

        <Box className="card" minH="300px">
          <Flex
            minH="100%"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Heading size="lg">Auth app</Heading>
              <Text my="4">An Authentication app.</Text>
              <HStack>
                <Badge colorScheme="yellow">Firebase</Badge>
                <Badge colorScheme="purple">React</Badge>
              </HStack>
            </Box>
            <Link
              href="https://github.com/guarmo/DevChallenges/tree/main/Auth-app"
              target="_blank"
            >
              Code
            </Link>
          </Flex>
          <Box className="go-corner">
            <Link
              className="go-arrow"
              href="https://auth-app-ddcb3.firebaseapp.com"
              target="_blank"
            >
              →
            </Link>
          </Box>
        </Box>

        <Box className="card" minH="300px">
          <Flex
            minH="100%"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Heading size="lg">IP Address Tracker</Heading>
              <Text my="4">Search for any IP address or domain.</Text>
              <HStack>
                <Badge colorScheme="cyan">JavaScript</Badge>
                <Badge colorScheme="red">Geocoding</Badge>
              </HStack>
            </Box>
            <Link
              href="https://github.com/guarmo/100-days-of-code/tree/master/Day5-IP-address-tracker"
              target="_blank"
            >
              Code
            </Link>
          </Flex>
          <Box className="go-corner">
            <Link
              className="go-arrow"
              href="https://condescending-tereshkova-919a58.netlify.app/"
              target="_blank"
            >
              →
            </Link>
          </Box>
        </Box>

        <Box className="card" minH="300px">
          <Flex
            minH="100%"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Heading size="lg">Shortly</Heading>
              <Text my="4">More than just shorter links.</Text>
              <HStack>
                <Badge colorScheme="cyan">JavaScript</Badge>
                <Badge colorScheme="pink">API</Badge>
              </HStack>
              <HStack mt="1">
                <Badge colorScheme="gray">Responsive</Badge>
              </HStack>
            </Box>

            <Link
              href="https://github.com/guarmo/100-days-of-code/tree/master/Day62-url-shortening-final"
              target="_blank"
            >
              Code
            </Link>
          </Flex>
          <Box className="go-corner">
            <Link
              className="go-arrow"
              href="https://upbeat-johnson-cb01e2.netlify.app/"
              target="_blank"
            >
              →
            </Link>
          </Box>
        </Box>

        <Box className="card" minH="300px">
          <Flex
            minH="100%"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Heading size="lg">Where in the world?</Heading>
              <Text my="4">REST Countries API.</Text>
              <HStack>
                <Badge colorScheme="cyan">JavaScript</Badge>
                <Badge colorScheme="pink">API</Badge>
              </HStack>
              <HStack mt="1">
                <Badge colorScheme="gray">Responsive</Badge>
              </HStack>
            </Box>
            <Link
              ml="4"
              href="https://github.com/guarmo/Eye-for-UI/tree/master/rest-countries-api-with-color-theme-switcher-master"
              target="_blank"
            >
              Code
            </Link>
          </Flex>
          <Box className="go-corner">
            <Link
              className="go-arrow"
              href="https://pedantic-kepler-2fe6c3.netlify.app/"
              target="_blank"
            >
              →
            </Link>
          </Box>
        </Box>

        <Box className="card" minH="300px">
          <Flex
            minH="100%"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Heading size="lg">Fylo</Heading>
              <Text my="4">
                Fylo landing page with dark theme and features grid.
              </Text>
              <HStack>
                <Badge colorScheme="red">Layout</Badge>
                <Badge colorScheme="gray">Responsive</Badge>
              </HStack>
            </Box>

            <Link
              href="https://github.com/guarmo/Eye-for-UI/tree/master/fylo-dark-theme-landing-page-master"
              target="_blank"
            >
              Code
            </Link>
          </Flex>
          <Box className="go-corner">
            <Link
              className="go-arrow"
              href="https://quirky-jackson-e7e142.netlify.app/"
              target="_blank"
            >
              →
            </Link>
          </Box>
        </Box>

        <Box className="card" minH="300px">
          <Flex
            minH="100%"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Heading size="lg">Ciccio Farro</Heading>
              <Text my="4">A music producer's personal page.</Text>
              <HStack>
                <Badge colorScheme="red">Layout</Badge>
                <Badge colorScheme="gray">Responsive</Badge>
              </HStack>
            </Box>
            <Link href="https://github.com/guarmo/cicciofarro" target="_blank">
              Code
            </Link>
          </Flex>
          <Box className="go-corner">
            <Link
              className="go-arrow"
              href="https://cicciofarro.com"
              target="_blank"
            >
              →
            </Link>
          </Box>
        </Box>
        
        <Box className="card" minH="300px">
          <Flex
            minH="100%"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Heading size="lg">Constantin Carstens</Heading>
              <Text my="4">A music producer's personal page.</Text>
              <HStack>
                <Badge colorScheme="red">Layout</Badge>
                <Badge colorScheme="gray">Responsive</Badge>
              </HStack>
            </Box>
            <Link href="https://github.com/guarmo/constantincarstens" target="_blank">
              Code
            </Link>
          </Flex>
          <Box className="go-corner">
            <Link
              className="go-arrow"
              href="https://www.constantincarstens.com/"
              target="_blank"
            >
              →
            </Link>
          </Box>
        </Box>

      </Grid>
    </Flex>
  );
};

export default Projects;
