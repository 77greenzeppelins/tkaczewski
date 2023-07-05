// import './globals.css';
// import '../styles/globals.css';
import React from 'react';
/**Components**/
import Header from '@/components/layoutComponents/header/Header';
import AppContainer from '@/components/layoutComponents/appContent/AppContainer';
/**CSS Staff**/
import '@/styles/globals.css';
/**Font Staff*/
import { inter, garamond } from './fonts/fonts';
import PseudoFooter from '@/components/layoutComponents/pseudoFooter/PseudoFooter';

/**<Head> staff*/
export const metadata = {
  title: 'tkaczewski | unique experiance',
  description: 'Provider of true take-offs in the Internet.',
};

/**---------------------------------**/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /**JSX**/
  return (
    <html
      lang="en"
      // className={inter.className}
      className={`${inter.variable} ${garamond.variable}`}
    >
      <body
        className="relative font-sans"
        /*
        ___1. z-order: <Header z-[500]>; <AppContainer z-[400]>; <PseudoFooter z-[450]>
        */
      >
        <Header />
        <AppContainer>{children}</AppContainer>
        <PseudoFooter />
      </body>
    </html>
  );
}
