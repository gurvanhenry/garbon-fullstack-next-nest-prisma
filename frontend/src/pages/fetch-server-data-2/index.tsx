import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Layout from '../../components/Layout';

export default function FetchServerData2({
  serverData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const message = serverData?.content;

  return (
    <Layout>
      <div>Data 2 - with next getServerSideProps</div>
      <div>Message from server :</div>
      {message ? (
        <div style={{ backgroundColor: '#A92' }}>{message}</div>
      ) : (
        <div style={{ backgroundColor: '#CCC' }}>no data</div>
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
  const res = await fetch('http://localhost:3000/message-from-db');
  const serverData = await res.json();
  return { props: { serverData } };
};
