import { AppProps } from 'next/app';
import Head from 'next/head';

import 'minireset.css/minireset.css';
import { fontFamily } from '../common/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700&family=Major+Mono+Display&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
      <style jsx global>
        {`
        html {
          font-family: ${fontFamily.main};
          font-size: 16px;
          min-height: 100vh;
        }

        body, #__next {
          min-height: 100vh;
        }

        #__next {
          display: flex;
          flex-flow: column;
        }

        *, *::before, *::after {
          box-sizing: border-box;
        }

        main {
          flex: 1;
        }
        `}
      </style>
    </>
  );
}
