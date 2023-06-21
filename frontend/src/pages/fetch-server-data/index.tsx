import { useEffect, useState } from 'react';
import { Layout } from '@/components/Layout';
import { Tag, Text } from '@chakra-ui/react';

export default function FetchServerData() {
  const [data, setData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await fetch('http://localhost:3000/message-from-db');
        if (res.ok) {
          return res.json();
        }
      } catch (error) {}
    };
    const fetchData = async () => {
      setIsLoading(true);
      const result = await makeRequest();
      setData(result);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const message = data?.content;

  return (
    <Layout>
      <Text>Data - fetch with useEffect : classic react way</Text>
      <Text>Message from server :</Text>
      {isLoading && <div style={{ backgroundColor: '#854' }}>Loading...</div>}
      {message ? (
        <Tag size="lg" colorScheme="cyan">
          {message}
        </Tag>
      ) : (
        <Tag size="lg" colorScheme="pink">
          no data
        </Tag>
      )}
    </Layout>
  );
}
