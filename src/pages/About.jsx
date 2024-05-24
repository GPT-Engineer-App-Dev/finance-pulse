import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" mb={4}>
        About Us
      </Heading>
      <Text fontSize="lg">
        Financial Times is a leading global business publication, recognized internationally for its authority, integrity, and accuracy. Our mission is to deliver the highest quality journalism and provide our readers with the insights they need to stay ahead in the world of business and finance.
      </Text>
    </Container>
  );
};

export default About;