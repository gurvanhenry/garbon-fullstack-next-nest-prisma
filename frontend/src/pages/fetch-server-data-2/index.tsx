// import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Layout } from '@/components/Layout';
import { Badge, Tag, Text } from '@chakra-ui/react';
// import { GetMessageResponse, apiGetMessage } from '@/lib/api';

// export default function FetchServerData2({
//   serverData,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//   const message = serverData?.content;

export default function FetchServerData2({ serverData }: { serverData: any }) {
  const message = serverData?.content;

  return (
    <Layout>
      <Badge mb="4" colorScheme="red">
        DISABLED - for static export
      </Badge>
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

// export const getServerSideProps: GetServerSideProps<{
//   serverData: GetMessageResponse | null;
// }> = async () => {
//   const result = await apiGetMessage();
//   return { props: { serverData: result } };
// };
