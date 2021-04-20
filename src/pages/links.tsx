import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../common/components/Layout';
import { colorPalette } from '../common/theme';

export default function Home() {
  const { locale } = useRouter();

  return (
    <Layout>
      <Head>
        <link rel="alternate" hrefLang="pt-BR" href="/pt-br/links" />
        <link rel="alternate" hrefLang="en-US" href="/links" />
        <link rel="alternate" hrefLang="x-default" href="/links" />
      </Head>
      <main>
        {locale}
      </main>

      <style jsx>
        {`
        main {
          background: linear-gradient(24deg, ${colorPalette.indigo}, ${colorPalette.atomicTangerine});
          background-size: 400% 400%;
          animation: gradient 30s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        `}
      </style>
    </Layout>
  );
}
