import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Layout } from '@/components/Layout';
import { Tag, Text } from '@chakra-ui/react';
import { apiGetMessage } from '@/lib/api';

export default function FetchServerData2({
  serverData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const message = serverData?.content;

  return (
    <Layout>
      <Text>Data 2 - with next getServerSideProps</Text>
      <Text>Message from server :</Text>
      {message ? (
        <Tag size="lg" bg={'#A92'}>
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

type ServerData = {
  id: number;
  content: string;
};

export const getServerSideProps: GetServerSideProps<{
  serverData: ServerData;
}> = async () => {
  const result = await apiGetMessage();
  return { props: { serverData: result } };
};
