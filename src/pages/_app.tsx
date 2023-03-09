import { AppProps } from 'next/app';
import '../styles/global.css';

export default function MGDev({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
