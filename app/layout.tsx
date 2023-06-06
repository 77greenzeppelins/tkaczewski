// import './globals.css';
// import '../styles/globals.css';
import React from 'react';
/**Components**/
import Header from '@/components/layoutComponents/header/Header';
import AppContainer from '@/components/layoutComponents/appContent/AppContainer';
import '@/styles/globals.css';
/**Font Staff*/
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

/**<Head> staff*/
export const metadata = {
  title: '77digits',
  description: 'Provider of true take-offs in the Internet. ',
};

/**---------------------------------**/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /**JSX**/
  return (
    <html lang="en" className={inter.className}>
      <body className="relative">
        <Header />
        <AppContainer>{children}</AppContainer>
        {/* <MainCanvas /> */}
        {/* <AppContent>{children}</AppContent> */}
        {/* <AppContentScrollControls>{children}</AppContentScrollControls> */}
        {/* <TestComponent /> */}
      </body>
    </html>
  );
}
