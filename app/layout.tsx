import React from 'react';
import type { Metadata } from 'next';
/**Components**/
import Header from '@/components/layoutComponents/header/Header';
import AppContainer from '@/components/layoutComponents/appContent/AppContainer';
import PseudoFooter from '@/components/layoutComponents/pseudoFooter/PseudoFooter';
/**CSS Staff**/
import '@/styles/globals.css';
/**Font Staff*/
import { inter, garamond } from './fonts/fonts';
import OverlayForResizing from '@/components/layoutComponents/overlays/overlayForResize/OverlayForResize';

/*
___1. docs: a Metadata API can be used to define your application metadata (e.g. meta and link tags inside your HTML head element) for improved SEO and web shareability"
___2. so there is no neeed to create <head> element inside <html> like in pre-13.3 version;
*/
export const metadata: Metadata = {
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
        {/* <OverlayForResizing /> */}
        <Header />
        {/* <AppContainer>{children}</AppContainer> */}
        <PseudoFooter />
      </body>
    </html>
  );
}
