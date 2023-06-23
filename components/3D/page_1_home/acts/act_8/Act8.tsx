import React from 'react';
/**Hooks**/
import useScrollPosition from '@/hooks/useScrollPosition';
import useMeasure from 'react-use-measure';
/**Components**/
import { InstantContactPanel } from '@/components';
/**Spring Section**/
import { useSpring, animated } from '@react-spring/three';
/**Basic Data*/
import { basicConfigs, page3DConfigs, springConfigs } from '@/data/basicData';
import { useGlobalContext } from '@/context/globalContext';

/**TS**/
interface Props {
  // groupProps: JSX.IntrinsicElements['group'];
  positionZ: number;
}

/**---------------------------------------**/
const Act8 = ({ positionZ }: Props) => {
  /*
  ___1. "scrollableHeight" is a height of scrollableContainer in pageHome
  */
  const { scrollableHeight } = useGlobalContext();
  /*
  ___1. to trigger this animation we have to know when user scrolls to the end of scrollable-container that comes from "2D-world";
  ___2. this container has actually "fix" height as it was set to 700vh; in that cese there is no reason to set props with this valu from 2D-world; using static data seems to be adequate;
  ___3. mountingCondition takes its valu from: progress of scrolling === responsive viewport height time 7-1; we have to subtract one viewport alight calculation from 2D-world where we have the followig calc: height of scrollable container - window.innerHeight
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
    basicConfigs.errorMargin;
  const muntingCondition =
    scrollYPosition.val >= startRange && scrollYPosition.val <= endRange;

  // const muntingCondition =
  //   scrollYPosition.val ===
  //   scrollableHeight - scrollableHeight / basicConfigs.pageHome.viewports;

  //___
  const { animPosZ } = useSpring({
    animPosZ: muntingCondition ? positionZ : positionZ + -3,
    config: springConfigs.heavyAndSlow,
  });

  // if (muntingCondition) {
  //   console.log('...show!');
  // } else {
  //   console.log('...hide!');
  // }
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
