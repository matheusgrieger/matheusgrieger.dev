import { Metadata } from 'next';
import { srOnly } from '@/styles/utilities.css';
import Logo from '@/components/Logo';
import { WithLangParam } from '@/types/with-lang-param';
import { logo, main, text } from './Home.css';

type HomePageProps = WithLangParam;

export default function HomePage({ params }: HomePageProps) {
  return (
    <main className={main}>
      <h1 className={srOnly}>Matheus Grieger.dev</h1>
      <Logo className={logo} />
      <p className={text}>{params.lang === 'en' ? 'Soon' : 'Em breve'}...</p>
    </main>
  );
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  return {
    title: 'Matheus Grieger.dev',
    description: params.lang === 'en' ? 'Soon...' : 'Em breve...',
  };
}
