import React from 'react';
/**GlobalState Staff*/
import { useGlobalContext } from '@/context/globalContext';
/**Hooks**/
import useScrollPosition from '@/hooks/useScrollPosition';
/**Components**/
import { InstantContactPanel } from '@/components';
/**Spring Section**/
import { useSpring, animated } from '@react-spring/three';
/**Basic Data*/
import { basicConfigs, page3DConfigs, springConfigs } from '@/data/basicData';

/**TS**/
interface Props {
  // groupProps: JSX.IntrinsicElements['group'];
  positionZ: number;
}

/**---------------------------------------**/
const Act8 = ({ positionZ }: Props) => {
  /*
  ___1. "scrollableHeight" is a height value of scrollableContainer in pageHome
  */
  const { scrollableHeight } = useGlobalContext();
  /*
  ___1. to trigger this animation we have to know when user scrolls to the end of scrollableContainer that is a component from "2D-world";
  ___2. this container has actually "fix" height as it was set to 700vh; for the purpose of this animation we need static data "basicConfigs.pageHome.viewports" and global properety that stores value of scrollableContainer;
  ___3. (first incorrect approach)mountingCondition takes its valu from: progress of scrolling === responsive viewport height (from useState hook) times 7-1; we have to subtract one viewport as this calculation have to mirror the one from 2D-world where we have the followig calc: height of scrollable container - window.innerHeight
  */
  const scrollYPosition = useScrollPosition();

  // const muntingCondition =
  //   scrollYPosition.val ===
  //   state.size.height * (basicConfigs.pageHome.viewports - 1);
  const startRange =
    scrollableHeight -
    scrollableHeight / basicConfigs.pageHome.viewports -
    basicConfigs.errorMargin;
  const endRange =
    scrollableHeight -
    scrollableHeight / basicConfigs.pageHome.viewports +
    page3DConfigs.pageHome.act8_data.errorMargin;
  const muntingCondition =
    scrollYPosition.val >= startRange && scrollYPosition.val <= endRange;

  //___
  const { animPosZ } = useSpring({
    animPosZ: muntingCondition
      ? positionZ
      : positionZ + page3DConfigs.pageHome.act8_data.hiddenPositionZ,
    config: springConfigs.heavyAndSlow,
  });

  /**JSX**/
  return (
    <animated.group position-z={animPosZ}>
      <InstantContactPanel
        topButtonPos={
          page3DConfigs.pageHome.act8_data.contactButtonConfig.topButtonPos
        }
        bottomButtonPos={
          page3DConfigs.pageHome.act8_data.contactButtonConfig.bottomButtonPos
        }
        scaleFrame={
          page3DConfigs.pageHome.act8_data.contactButtonConfig.scaleFrame
        }
        scaleImage={
          page3DConfigs.pageHome.act8_data.contactButtonConfig.scaleImage
        }
      />
    </animated.group>
  );
};

export default Act8;
