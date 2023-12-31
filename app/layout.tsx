/**Components**/
import OverlayForIntro from '@/components/layoutComponents/overlays/forIntro/IntroOverlay';
import OverlayForResizing from '@/components/layoutComponents/overlays/forResizing/OverlayForResizing';
import Header from '@/components/layoutComponents/header/Header';
import AppContainer from '@/components/layoutComponents/appContent/AppContainer';
import PseudoFooter from '@/components/layoutComponents/pseudoFooter/PseudoFooter';
/**CSS Staff**/
import '@/styles/globals.css';
/**Font Staff*/
import { inter, garamond } from './fonts/fonts';

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
        ___1. z-order: <OverlayForIntro z-[700]> <OverlayForResizing z-[600]/> <Header z-[500]>; <AppContainer z-[400]>; <PseudoFooter z-[450]>
        */
      >
        <OverlayForIntro />
        <OverlayForResizing />
        <Header />
        <AppContainer>{children}</AppContainer>
        <PseudoFooter />
      </body>
    </html>
  );
}
