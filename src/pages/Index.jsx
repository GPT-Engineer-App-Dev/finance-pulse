import { Box, Container, Heading, Text, VStack, HStack, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h1" mb={4}>
            Financial Times
          </Heading>
          <Text fontSize="lg">
            Welcome to the Financial Times, your trusted source for the latest in business, finance, and economic news.
          </Text>
        </Box>
        <HStack spacing={8} align="start">
          <Box flex="3">
            <Heading as="h2" size="lg" mb={4}>
              Main News
            </Heading>
            <Box mb={4}>
              <Image src="/images/main-news.jpg" alt="Main News" />
              <Text fontSize="md" mt={2}>
                Breaking news and in-depth analysis on the most important stories in business and finance.
              </Text>
            </Box>
          </Box>
          <Box flex="1">
            <Heading as="h2" size="lg" mb={4}>
              Sidebar
            </Heading>
            <Box mb={4}>
              <Image src="/images/sidebar-news.jpg" alt="Sidebar News" />
              <Text fontSize="md" mt={2}>
                Additional content and insights to keep you informed.
              </Text>
            </Box>
          </Box>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;