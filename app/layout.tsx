// import './globals.css';
// import '../styles/globals.css';
import Scene3D from '@/components/3D/3D_Scene/Scene3D';
import { Header } from '@/components/layoutComponents/header/Header';
import '@/styles/globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '77digits',
  description: 'Provider of true take-offs in the Internet. ',
};

const sceneWrapperConfig =
  'fixed top-0 left-0 w-full h-full overflow-hidden z-1';
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
        <div className={sceneWrapperConfig}>
          <Scene3D />
        </div>
        ;
        <main
          className="z-10 w-full h-full"
          //  className="app"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
