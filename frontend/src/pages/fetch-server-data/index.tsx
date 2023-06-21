import { useEffect, useState } from 'react';
import { Layout } from '@/components/Layout';

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
      <div>Data - fetch with useEffect : classic react way</div>
      <div>Message from server :</div>
      {isLoading && <div style={{ backgroundColor: '#854' }}>Loading...</div>}
      {message ? (
        <div style={{ backgroundColor: '#592' }}>{message}</div>
      ) : (
        <div style={{ backgroundColor: '#CCC' }}>no data</div>
      )}
    </Layout>
  );
}
