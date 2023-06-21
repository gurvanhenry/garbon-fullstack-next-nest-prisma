import { GLink } from '@/components/GLink';
import { Layout } from '@/components/Layout';
import { Box, Heading, List, ListIcon, ListItem } from '@chakra-ui/react';
import { FaLink } from 'react-icons/fa';

export default function Home() {
  return (
    <Layout>
      <Box>
        <Heading size={'lg'}>Home</Heading>
        <List>
          <ListItem>
            <ListIcon as={FaLink} color="green.500" />
            <GLink href="/about">About</GLink>
          </ListItem>
          <ListItem>
            <ListIcon as={FaLink} color="green.500" />
            <GLink href="/fetch-server-data">Fetch server data</GLink>
          </ListItem>
          <ListItem>
            <ListIcon as={FaLink} color="green.500" />
            <GLink href="/fetch-server-data-2">Fetch server data 2</GLink>
          </ListItem>
          <ListItem>
            <ListIcon as={FaLink} color="green.500" />
            <GLink href="/chakraui">Chakra ui lab</GLink>
          </ListItem>
        </List>
      </Box>
    </Layout>
  );
}
