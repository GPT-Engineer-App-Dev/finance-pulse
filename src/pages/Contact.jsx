import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" mb={4}>
        Contact Us
      </Heading>
      <Text fontSize="lg">
        For any inquiries, please reach out to us at contact@financialtimes.com. We value your feedback and look forward to hearing from you.
      </Text>
    </Container>
  );
};

export default Contact;