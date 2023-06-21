// import Link from 'next/link';
import { Link } from '@chakra-ui/next-js';
import { UrlObject } from 'url';

type Url = string | UrlObject;

type LinkProps = {
  href: Url;
  children?: React.ReactNode;
};

export function GLink({ href, children }: LinkProps) {
  return (
    <Link href={href} color="blue.400" _hover={{ color: 'blue.700' }}>
      {children}
    </Link>
  );
}
