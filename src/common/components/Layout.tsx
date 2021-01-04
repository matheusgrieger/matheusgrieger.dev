import { ReactNode, useRef } from 'react';
import Link from 'next/link';
import { useHoverDirty } from 'react-use';
import { motion, Variants } from 'framer-motion';
import css from 'styled-jsx/css';
import { colorPalette } from '../theme';

const logoVariants: Variants = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  visible: {
    opacity: 1,
    width: 'auto',
  },
};

function getSpanStyles() {
  return css.resolve`
    span {
      white-space: nowrap;
      display: inline-block;
    }
  `;
}

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const brandRef = useRef<HTMLAnchorElement>(null!);
  const isHovering = useHoverDirty(brandRef);
  const { className, styles } = getSpanStyles();

  return (
    <>
      <nav role="navigation" aria-label="main navigation">
        <Link href="/">
          <a title="Matheus Grieger Dev" ref={brandRef}>
            M
            <motion.span variants={logoVariants} initial="hidden" animate={isHovering ? 'visible' : 'hidden'} className={className}>atheus</motion.span>
            G
            <motion.span variants={logoVariants} initial="hidden" animate={isHovering ? 'visible' : 'hidden'} className={className}>rieger</motion.span>
            .DEV
          </a>
        </Link>
      </nav>
      {children}
      <style jsx>
        {`
        nav {
          position: fixed;
          top: 2rem;
          left: 0;
          width: auto;
          background-color: ${colorPalette.blackOlive};
          clip-path: polygon(0 0, 100% 0%, calc(100% - 1.5rem) 100%, 0% 100%);
        }

        a {
          font-family: 'Major Mono Display', monospace;
          color: ${colorPalette.white};
          text-decoration: none;
          padding: 1rem 2rem 1rem 1.5rem;
          display: block;
        }
        `}
      </style>
      {styles}
    </>
  );
}
