import React, { ReactElement } from 'react';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}

export default App;
