import React, { ReactElement } from 'react';
import Head from 'next/head';

import Example from 'components/Example';

function Home(): ReactElement {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Example />
    </div>
  );
}

export default Home;
