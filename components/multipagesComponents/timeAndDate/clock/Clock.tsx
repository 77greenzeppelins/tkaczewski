import React, { useCallback, useEffect, useRef, useState } from 'react';

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
  const [currentTime, setCurrentTime] = useState(['00:00', '00']);
  /*
  ___1. Use useRef to store the interval ID, instead of a local variable inside the effect. This will allow you to access the interval ID inside the cleanup function.
  */
  // const intervalIdRef = useRef<ReturnType<typeof setInterval> | string>('');
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  /*
  __2. Use useCallback to wrap the updateTime function, so that it doesn't get recreated every time the component renders. This can improve performance and prevent unnecessary re-renders.
  */
  const updateTime = useCallback(() => {
    const time = new Date().toLocaleTimeString('en', {
      timeZone: timeZone,
      hourCycle: 'h24',
    });
    let timePart2 = time.split(':')[2];
    let timePart1 = time.slice(0, 6);
    setCurrentTime([timePart1, timePart2]);
  }, [timeZone]);

  /**Settings Section**/
  useEffect(() => {
    //__call it to avoid 1 sec gap in displaying
    updateTime();
    intervalIdRef.current = setInterval(updateTime, 1000);
    //__cleaner;
    // return () => clearInterval(intervalIdRef.current);
    return () => clearTimeout(intervalIdRef.current as NodeJS.Timeout);
  }, [updateTime]);

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
