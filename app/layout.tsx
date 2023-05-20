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

const canvasWrapperStyle =
  'relative w-full h-full overflow-hidden pointer-events-none bg-corpo';
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
        {/* <div data-layout="Scene3D__wrapper" className={sceneWrapperConfig}>
          <Scene3D />
        </div> */}
        <div className="root">
          <div className="content3D">
            <Scene3D />
          </div>
          <div className="content2D">
            <main
              className="w-full h-full "
              //  className="app"
            >
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
