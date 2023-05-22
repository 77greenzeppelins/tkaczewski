// import './globals.css';
// import '../styles/globals.css';
import React from 'react';
/**Components**/
import { Header } from '@/components/layoutComponents/header/Header';
import '@/styles/globals.css';
import AppContent from '@/components/layoutComponents/appContent/AppContent';
/**Font Staff*/
import { Inter } from 'next/font/google';
import CanvasWithHtml from '@/components/3D/_Drei/canvas/CanvasWithHtml';
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
      <body>
        <Header />
        <AppContent>{children}</AppContent>
        {/* <CanvasWithHtml /> */}
      </body>
    </html>
  );
}
