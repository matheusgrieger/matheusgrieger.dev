import Layout from '../common/components/Layout';
import { colorPalette } from '../common/theme';

export default function Home() {
  return (
    <Layout>
      <main>
        <h1>Hello world</h1>
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
