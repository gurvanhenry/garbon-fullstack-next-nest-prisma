import { GLink } from '@/components/GLink';
import { Layout } from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <div>
        <div>Home</div>
        <ul>
          <li>
            <GLink href="/about">About</GLink>
          </li>
          <li>
            <GLink href="/fetch-server-data">Fetch server data</GLink>
          </li>
          <li>
            <GLink href="/fetch-server-data-2">Fetch server data 2</GLink>
          </li>
          <li>
            <GLink href="/chakraui">Chakra ui lab</GLink>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
