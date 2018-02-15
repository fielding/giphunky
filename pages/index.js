import React from 'react';
import Head from 'next/head';

import Page from '../components/Page';
import GiphySearch from '../components/GiphySearch';

const Index = () => (
  <Page>
    <Head>
      <title>infinite scroll giphy search</title>
    </Head>
    <GiphySearch />
  </Page>
);

export default Index;
