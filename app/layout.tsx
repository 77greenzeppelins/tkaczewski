// import './globals.css';
// import '../styles/globals.css';
import { Header } from '@/components/layoutComponents/header/Header';
import '@/styles/globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
      <body className="">
        <Header />
        <main
          className="w-full h-full"
          //  className="app"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
