import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { Container } from 'components/atoms/Container';
import { Header } from 'components/molecules/Header';

import { globalStyles } from 'styles/global';

import SEO from '../../next-seo.config';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ignite Shop</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#121214" />
        <meta name="description" content="T-shirt E-commerce" />
      </Head>
      <DefaultSeo {...SEO} />

      <Container>
        <Header />

        <Component {...pageProps} />
      </Container>
    </>
  );
}
