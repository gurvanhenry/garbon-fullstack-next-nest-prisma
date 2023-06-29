import { theme } from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="application-name" content="garbon" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="icon"
          href="/icons/icon-512x512.png"
          type="image/png"
          sizes="512x512"
        />
        <meta name="theme-color" content="#317EFB" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
