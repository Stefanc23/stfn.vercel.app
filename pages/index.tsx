import { useContext } from 'react';
import {
  ReactBricksContext,
  PageViewer,
  fetchPage,
  cleanPage,
  types,
} from 'react-bricks/frontend';
import Head from 'next/head';
import { GetStaticProps } from 'next';

import config from '../react-bricks/config';
import Layout from '../components/layout';
import ErrorNoKeys from '../components/errorNoKeys';
import ErrorNoHomePage from '../components/errorNoHomePage';

interface HomeProps {
  page: types.Page;
  error: string;
}

const Home: React.FC<HomeProps> = ({ page, error }) => {
  // Clean the received content
  // Removes unknown or not allowed bricks
  const { pageTypes, bricks } = useContext(ReactBricksContext);

  const pageOk = page ? cleanPage(page, pageTypes, bricks) : null;

  return (
    <Layout>
      {pageOk && (
        <>
          <Head>
            <title>{page.meta.title}</title>
            <meta name='description' content={page.meta.description} />
            <link
              rel='apple-touch-icon'
              sizes='180x180'
              href='/apple-touch-icon.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='/favicon-32x32.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='16x16'
              href='/favicon-16x16.png'
            />
            <link rel='manifest' href='/site.webmanifest' />
            <link
              rel='mask-icon'
              href='/safari-pinned-tab.svg'
              color='#5bbad5'
            />
            <meta name='theme-color' content='#ffffff'></meta>
          </Head>
          <PageViewer page={pageOk} />
        </>
      )}
      {error === 'NOKEYS' && <ErrorNoKeys />}
      {error === 'NOPAGE' && <ErrorNoHomePage />}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (!config.apiKey) {
    return { props: { error: 'NOKEYS' } };
  }
  try {
    const page = await fetchPage('home', config.apiKey, context.locale);
    return { props: { page } };
  } catch {
    return { props: { error: 'NOPAGE' } };
  }
};

export default Home;
