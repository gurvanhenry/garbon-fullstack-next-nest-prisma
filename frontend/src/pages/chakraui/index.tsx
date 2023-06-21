import { FaMoon, FaSun } from 'react-icons/fa';
import { Layout } from '@/components/Layout';
import { ArrowForwardIcon, EmailIcon } from '@chakra-ui/icons';
import {
  VStack,
  Container,
  Box,
  Flex,
  Spacer,
  Button,
  Stack,
  useToast,
  UnorderedList,
  ListItem,
  Card,
  CardBody,
  Text,
  Input,
  Heading,
  Alert,
  AlertIcon,
  CircularProgress,
  RadioGroup,
  Radio,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';

export default function ChakraUi() {
  const toast = useToast();
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Layout>
      <div>Chakra lab</div>
      <IconButton
        aria-label="toggle theme"
        rounded="full"
        size="md"
        position="absolute"
        top={4}
        right={4}
        onClick={toggleColorMode}
        icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
      />
      <Box>Box</Box>
      <Box bg="tomato" w="80%" p={4} color="white">
        This is the Box
      </Box>
      <VStack>
        <Container maxW="md" bg="blue.600" color="white">
          md Container
        </Container>
        <Container maxW="550px" bg="purple.600" color="white">
          550px Container
        </Container>
        <Container maxW="container.sm" bg="green.400" color="#262626">
          container.sm Container
        </Container>
        <Container>Container</Container>
      </VStack>
      <Flex>
        <Box p="4" bg="red.400">
          Box 1
        </Box>
        <Spacer />
        <Box p="4" bg="green.400">
          Box 2
        </Box>
      </Flex>
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme="teal" size="xs">
          Button
        </Button>
        <Button colorScheme="teal" size="sm">
          Button
        </Button>
        <Button colorScheme="teal" size="md">
          Button
        </Button>
        <Button colorScheme="teal" size="lg">
          Button
        </Button>
        <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
          Email
        </Button>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="teal"
          variant="outline"
        >
          Call us
        </Button>
        <Button isLoading colorScheme="teal" variant="solid">
          Email
        </Button>
      </Stack>{' '}
      <Button
        onClick={() =>
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
      <UnorderedList>
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </UnorderedList>
      <Card>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Stack spacing={3}>
        <Input variant="outline" placeholder="Outline" />
        <Input variant="filled" placeholder="Filled" />
        <Input variant="flushed" placeholder="Flushed" />
        <Input variant="unstyled" placeholder="Unstyled" />
      </Stack>
      <Stack spacing={3}>
        <Text fontSize="6xl">(6xl) In love with React & Next</Text>
        <Text fontSize="5xl">(5xl) In love with React & Next</Text>
        <Text fontSize="4xl">(4xl) In love with React & Next</Text>
        <Text fontSize="3xl">(3xl) In love with React & Next</Text>
        <Text fontSize="2xl">(2xl) In love with React & Next</Text>
        <Text fontSize="xl">(xl) In love with React & Next</Text>
        <Text fontSize="lg">(lg) In love with React & Next</Text>
        <Text fontSize="md">(md) In love with React & Next</Text>
        <Text fontSize="sm">(sm) In love with React & Next</Text>
        <Text fontSize="xs">(xs) In love with React & Next</Text>
      </Stack>
      <Stack spacing={6}>
        <Heading as="h1" size="4xl" noOfLines={1}>
          (4xl) In love with React & Next
        </Heading>
        <Heading as="h2" size="3xl" noOfLines={1}>
          (3xl) In love with React & Next
        </Heading>
        <Heading as="h2" size="2xl">
          (2xl) In love with React & Next
        </Heading>
        <Heading as="h2" size="xl">
          (xl) In love with React & Next
        </Heading>
        <Heading as="h3" size="lg">
          (lg) In love with React & Next
        </Heading>
        <Heading as="h4" size="md">
          (md) In love with React & Next
        </Heading>
        <Heading as="h5" size="sm">
          (sm) In love with React & Next
        </Heading>
        <Heading as="h6" size="xs">
          (xs) In love with React & Next
        </Heading>
      </Stack>
      <Heading>Default heading</Heading>
      <Heading variant="custom">Themed heading</Heading>
      <Heading variant="brand">Branded heading</Heading>
      <Heading variant="underline">Underlined heading</Heading>
      <Stack spacing={3}>
        <Alert status="error">
          <AlertIcon />
          There was an error processing your request
        </Alert>

        <Alert status="success">
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>

        <Alert status="warning">
          <AlertIcon />
          Seems your account is about expire, upgrade now
        </Alert>

        <Alert status="info">
          <AlertIcon />
          Chakra is going live on August 30th. Get ready!
        </Alert>
      </Stack>
      <CircularProgress value={80} />
      <RadioGroup onChange={undefined} value={'1'}>
        <Stack direction="row">
          <Radio value="1">First</Radio>
          <Radio value="2">Second</Radio>
          <Radio value="3">Third</Radio>
        </Stack>
      </RadioGroup>
    </Layout>
  );
}
