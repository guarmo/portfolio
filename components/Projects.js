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
  /* Projects */
  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="center"
        id="projects"
        minH="100vh"
        position="relative"
      >
        <h1 className="subtitle fancy">
          <span>
            <Text fontSize="50px">projects</Text>
          </span>
        </h1>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            sm: "repeat(1, 1fr)",
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
              <Flex>
                <Link
                  href="https://secret-badlands-45247.herokuapp.com/"
                  target="_blank"
                >
                  Live
                </Link>
                <Link
                  ml="4"
                  href="https://github.com/guarmo/DevChallenges/tree/main/my-unsplash"
                  target="_blank"
                >
                  Code
                </Link>
              </Flex>
            </Flex>
            <Box className="go-corner">
              <Box className="go-arrow">→</Box>
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
              <Flex>
                <Link
                  href="https://secret-badlands-45247.herokuapp.com/"
                  target="_blank"
                >
                  Live
                </Link>
                <Link
                  ml="4"
                  href="https://github.com/guarmo/DevChallenges/tree/main/my-unsplash"
                  target="_blank"
                >
                  Code
                </Link>
              </Flex>
            </Flex>
            <Box className="go-corner">
              <Box className="go-arrow">→</Box>
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
              <Flex>
                <Link
                  href="https://hardcore-shirley-3a9287.netlify.app/"
                  target="_blank"
                >
                  Live
                </Link>
                <Link
                  ml="4"
                  href="https://github.com/guarmo/DevChallenges/tree/main/image-uploader"
                  target="_blank"
                >
                  Code
                </Link>
              </Flex>
            </Flex>
            <Box className="go-corner">
              <Box className="go-arrow">→</Box>
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
              <Flex>
                <Link
                  href="https://auth-app-ddcb3.firebaseapp.com"
                  target="_blank"
                >
                  Live
                </Link>
                <Link
                  ml="4"
                  href="https://github.com/guarmo/DevChallenges/tree/main/Auth-app"
                  target="_blank"
                >
                  Code
                </Link>
              </Flex>
            </Flex>
            <Box className="go-corner">
              <Box className="go-arrow">→</Box>
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
                </HStack>
              </Box>
              <Flex>
                <Link
                  href="https://condescending-tereshkova-919a58.netlify.app/"
                  target="_blank"
                >
                  Live
                </Link>
                <Link
                  ml="4"
                  href="https://github.com/guarmo/100-days-of-code/tree/master/Day5-IP-address-tracker"
                  target="_blank"
                >
                  Code
                </Link>
              </Flex>
            </Flex>
            <Box className="go-corner">
              <Box className="go-arrow">→</Box>
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
              <Flex>
                <Link
                  href="https://upbeat-johnson-cb01e2.netlify.app/"
                  target="_blank"
                >
                  Live
                </Link>
                <Link
                  ml="4"
                  href="https://github.com/guarmo/100-days-of-code/tree/master/Day62-url-shortening-final"
                  target="_blank"
                >
                  Code
                </Link>
              </Flex>
            </Flex>
            <Box className="go-corner">
              <Box className="go-arrow">→</Box>
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
              <Flex>
                <Link
                  href="https://pedantic-kepler-2fe6c3.netlify.app/"
                  target="_blank"
                >
                  Live
                </Link>
                <Link
                  ml="4"
                  href="https://github.com/guarmo/Eye-for-UI/tree/master/rest-countries-api-with-color-theme-switcher-master"
                  target="_blank"
                >
                  Code
                </Link>
              </Flex>
            </Flex>
            <Box className="go-corner">
              <Box className="go-arrow">→</Box>
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
                  <Badge colorScheme="gray">Responsive</Badge>
                </HStack>
              </Box>
              <Flex>
                <Link
                  href="https://quirky-jackson-e7e142.netlify.app/"
                  target="_blank"
                >
                  Live
                </Link>
                <Link
                  ml="4"
                  href="https://github.com/guarmo/Eye-for-UI/tree/master/fylo-dark-theme-landing-page-master"
                  target="_blank"
                >
                  Code
                </Link>
              </Flex>
            </Flex>
            <Box className="go-corner">
              <Box className="go-arrow">→</Box>
            </Box>
          </Box>

          <Box className="card" minH="300px">
            <Flex
              minH="100%"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box>
                <Heading size="lg">Insure</Heading>
                <Text my="4">Insure landing page.</Text>
                <HStack>
                  <Badge colorScheme="gray">Responsive</Badge>
                </HStack>
              </Box>
              <Flex>
                <Link
                  href="https://inspiring-borg-4e02e6.netlify.app/"
                  target="_blank"
                >
                  Live
                </Link>
                <Link
                  ml="4"
                  href="https://github.com/guarmo/Eye-for-UI/tree/master/insure-landing-page-master"
                  target="_blank"
                >
                  Code
                </Link>
              </Flex>
            </Flex>
            <Box className="go-corner">
              <Box className="go-arrow">→</Box>
            </Box>
          </Box>
        </Grid>
      </Flex>
    </>
  );
};

export default Projects;
