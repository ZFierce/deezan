import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const LandingPage = () => {
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Box
      as="section"
      minH="100vh"
      bgGradient="linear(to-br, gray.900, gray.800)"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={6}
    >
      <VStack spacing={10} textAlign="center" animation={`${fadeInUp} 1s ease-out`}>
        <Heading fontSize={["3xl", "4xl", "6xl"]} fontWeight="bold">
          Discover Affordable Alternatives to Luxury Fashion
        </Heading>

        <Text fontSize={["md", "lg", "xl"]} color={textColor} maxW="600px">
          Upload a photo or paste a link and our AI will find stylish, high-quality dupes
          — all from trusted brands and shipped fast.
        </Text>

        <HStack spacing={6}>
          <Button colorScheme="teal" size="lg">
            Get Started
          </Button>
          <Button variant="outline" colorScheme="teal" size="lg">
            Learn More
          </Button>
        </HStack>

        <Image
          src="/assets/fashion-demo.png"
          alt="Fashion Finder Demo"
          borderRadius="xl"
          maxW="100%"
          boxShadow="2xl"
          mt={6}
        />
      </VStack>
    </Box>
  );
};

export default LandingPage;
