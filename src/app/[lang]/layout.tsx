import { ReactNode } from 'react';
import '@/styles/global.css';
import { themeClass } from '@/styles/theme.css';

type MainLayoutProps = {
  children: ReactNode;
  params: { lang: string };
};

export default function MainLayout({ children, params }: MainLayoutProps) {
  return (
    <html lang={params.lang} className={themeClass}>
      <body>{children}</body>
    </html>
  );
}
