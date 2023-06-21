import { Layout } from '@/components/Layout';
import { VStack, Container, Box } from '@chakra-ui/react';

export default function ChakraUi() {
  return (
    <Layout>
      <div>Chakra lab</div>
      <Box>Box</Box>
      <Box bg="tomato" w="80%" p={4} color="white">
        This is the Box
      </Box>
      <VStack>
        <Container maxW="md" bg="blue.600" color="white">
          "md" Container
        </Container>
        <Container maxW="550px" bg="purple.600" color="white">
          "550px" Container
        </Container>
        <Container maxW="container.sm" bg="green.400" color="#262626">
          "container.sm" Container
        </Container>
        <Container>Container</Container>
      </VStack>
    </Layout>
  );
}
