import { useEffect, useState } from 'react';
import { Layout } from '@/components/Layout';
import { Tag, Text } from '@chakra-ui/react';
import { GetMessageResponse, apiGetMessage } from '@/lib/api';

export default function FetchServerData() {
  const [data, setData] = useState<GetMessageResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await apiGetMessage();
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
