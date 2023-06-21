import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div>
        <div>Home</div>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/fetch-server-data">Fetch server data</Link>
          </li>
          <li>
            <Link href="/fetch-server-data-2">Fetch server data 2</Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
