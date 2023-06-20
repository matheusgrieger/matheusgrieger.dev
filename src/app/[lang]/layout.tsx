import { ReactNode } from 'react';
import { Ubuntu } from 'next/font/google';
import clsx from 'clsx';
import '@/styles/global.css';
import { themeClass } from '@/styles/theme.css';
import { WithLangParam } from '@/types/with-lang-param';

const ubuntu = Ubuntu({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-ubuntu',
});

type MainLayoutProps = WithLangParam<{
  children: ReactNode;
}>;

export default function MainLayout({ children, params }: MainLayoutProps) {
  return (
    <html lang={params.lang} className={clsx(themeClass, ubuntu.variable)}>
      <body>{children}</body>
    </html>
  );
}
