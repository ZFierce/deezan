import React from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Container,
  SimpleGrid,
  Icon,
  Link,
  Flex,
  useColorModeValue,
  keyframes,
} from "@emotion/react";
import { FaShippingFast, FaLeaf, FaShieldAlt, FaMobileAlt } from "react-icons/fa";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px) }
  to { opacity: 1; transform: translateY(0) }
`;

function LandingPage() {
  const fadeInAnimation = `${fadeIn} 1s ease forwards`;

  return (
    <Box fontFamily="'Poppins', sans-serif" minH="100vh" bgGradient="linear(to-r, gray.50, white)">
      {/* Hero Section */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
        py={{ base: 20, md: 32 }}
        px={4}
        maxW="container.md"
        mx="auto"
      >
        <Heading
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="extrabold"
          mb={6}
          animation={fadeInAnimation}
          color={useColorModeValue("gray.900", "white")}
        >
          Discover Your Style, Smarter
        </Heading>
        <Text
          fontSize={{ base: "lg", md: "2xl" }}
          mb={8}
          maxW="600px"
          animation={fadeInAnimation}
          animationDelay="0.3s"
          color={useColorModeValue("gray.600", "gray.300")}
        >
          Find affordable alternatives to luxury fashion effortlessly with AI.
        </Text>
        <HStack spacing={6} animation={fadeInAnimation} animationDelay="0.6s">
          <Button colorScheme="blackAlpha" size="lg" px={8} fontWeight="bold" borderRadius="md">
            Get Started
          </Button>
          <Button variant="outline" size="lg" px={8} borderRadius="md">
            Learn More
          </Button>
        </HStack>
      </Flex>

      {/* Features Section */}
      <Box bg="white" py={{ base: 16, md: 24 }} px={4} boxShadow="sm" mt={12}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
            <Feature icon={FaShippingFast} title="Fast Results" desc="Get instant recommendations tailored to your style." />
            <Feature icon={FaLeaf} title="Eco-Friendly Choices" desc="We highlight sustainable and ethical brands." />
            <Feature icon={FaShieldAlt} title="Trusted Retailers" desc="Only well-known and reliable stores included." />
            <Feature icon={FaMobileAlt} title="Easy to Use" desc="Search by text, photo, or link — on any device." />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        as="footer"
        bg="gray.900"
        color="gray.400"
        py={6}
        textAlign="center"
        fontSize="sm"
        mt={24}
      >
        &copy; {new Date().getFullYear()} Fashion Finder. All rights reserved.
      </Box>
    </Box>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <VStack align="start" spacing={4}>
      <Icon as={icon} boxSize={10} color="blue.600" />
      <Heading as="h3" size="md" fontWeight="semibold" color="gray.800">
        {title}
      </Heading>
      <Text color="gray.600">{desc}</Text>
    </VStack>
  );
}

export default function App() {
  return (
    <ChakraProvider>
      <LandingPage />
    </ChakraProvider>
  );
}
