import React from 'react';
import Head from 'next/head';

import Page from '../components/Page';
import GiphySearch from '../components/GiphySearch';

import stylesheet from '../styles/index.css';

const Index = () => (
  <Page>
    <Head>
      <title>infinite scroll giphy search</title>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <GiphySearch />
  </Page>
);

export default Index;
