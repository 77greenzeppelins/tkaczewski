import React, { useEffect, useState } from 'react';

/**TS**/
interface Props {
  timeZone: string;
  containerStyle?: string;
  textStyle?: string;
  textStyleSeconds?: string;
}
/**---------------------**/
const Clock = ({
  timeZone,
  containerStyle,
  textStyle,
  textStyleSeconds,
}: Props) => {
  /**State Section**/
  const [currentTime, setCurrentTime] = useState(['', '']);

  /**Settings Section**/
  useEffect(() => {
    //__handler
    const updateTime = () => {
      let time = new Date().toLocaleTimeString('en', {
        timeZone: timeZone,
        hourCycle: 'h24', // delats PM / AM
      });
      let timePart2 = time.split(':')[2];
      let timePart1 = time.slice(0, 6);
      setCurrentTime([timePart1, timePart2]);
    };
    //__update time every 1 sec
    const timeController = setInterval(updateTime, 1000);
    //__cleaner;
    return () => clearInterval(timeController);
  }, [timeZone]);

  /**JSX**/
  return (
    <div
      className={
        containerStyle
          ? containerStyle
          : 'flex items-end w-[68px] sm:w-[94px] xl:w-[122px] '
      }
    >
      <p className={textStyle}>{currentTime[0]}</p>
      <p className={textStyle || textStyleSeconds}>{currentTime[1]}</p>
    </div>
  );
};

export default Clock;

/**
 * <Clock city={'Dzierżoniów'} timeZone={'Europe/Warsaw'} />
 */
