import { Box } from '@chakra-ui/react';
import { GLink } from './GLink';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box m={30}>
      <Box>
        🏠 <GLink href="/">garbon</GLink> 🏠
      </Box>
      <Box
        w="100%"
        p={4}
        mt={4}
        mb={4}
        borderWidth="1px"
        borderRadius="lg"
        borderColor="pink.500"
      >
        {children}
      </Box>
      <Box>🍀</Box>
    </Box>
  );
}
