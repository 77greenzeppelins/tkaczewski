import React from 'react';
/**Components*/
import { InstantContactButtons2D } from '@/components';
import PageContent from '../pageContent/PageContent';
/**Spring Staff*/
import { SpringValue, animated } from '@react-spring/web';

/**TS**/
interface Props {
  opacity: SpringValue<number>;
  scale: SpringValue<number>;
  transform: SpringValue<string>;
  hintIsMobile: boolean;
}

/**-------------------------------**/
const StickyContainer = ({
  opacity,
  scale,
  transform,
  hintIsMobile,
}: Props) => {
  /****/

  /**JSX**/
  return (
    <div
      data-component="StickyContainer"
      className="sticky h-screen top-0 bottom-0 inset-x-0 overflow-hidden -z-0"
      //___  flex justify-center items-center -z-10
    >
      <div className="relative w-full h-full">
        <div className="relative w-full h-full">
          <animated.div
            className="relative w-full h-full"
            /*
            ___1. why scale is modified? 
            ___2. scale of this container reflects progress of scrolling (with custome factor, depending on effect we want to achieve);
            ___3. scale must be reduced to zero to "disable" the buttons
            */
            style={{ scale: scale }}
          >
            <InstantContactButtons2D
              /*
              ___1.order matters: [ top = phoneButton , bottom = emailButton ]
              */
              containerStyle={[
                'absolute top-[11.5vh] ',
                'absolute bottom-[11vh] ml-[180px]',
              ]}
              buttonsWidth={[0.3, 0.22]}
              buttonsHeight={[0.4, 0.3]}
            />
          </animated.div>

          <animated.div
            /*
            ___1. why such animated.div?
            ___2. It works as overlay that covers "canvas" reflecting scroll progress;
            ___3. its value comes from 0 to 1; 
            */
            style={{ opacity: opacity }}
            className="absolute inset-0 bg-dark pointer-events-none"
          />
        </div>
        {hintIsMobile ? null : (
          <PageContent transform={transform} hintIsMobile={hintIsMobile} />
        )}
      </div>
    </div>
  );
};

export default StickyContainer;

{
  /* <PageContent transform={transform} hintIsMobile={hintIsMobile} /> */
}
{
  /* <ContactsDataSection transform={transform} stateSetter={setInView} /> */
}
{
  /* <div className="fixed top-[100px] left-0 bg-corpo">
          {inView.toString()}
        </div> */
}
