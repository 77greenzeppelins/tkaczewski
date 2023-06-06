import React from 'react';
/**Hook Staff**/
import useDate from '@/hooks/useDate';

/**TS**/
interface Props {
  textStyle?: string;
}

/**------------------------------**/
const DateDisplayer = ({ textStyle }: Props) => {
  /**Hook Section**/
  const { year, month, day, weekday } = useDate();

  /**JSX**/
  return (
    <div className="flex gap-[4px] ">
      <p className={textStyle}>{weekday}, </p>
      <p className={textStyle}>{day} </p>
      <p className={textStyle}>{month} </p>
      <p className={textStyle}>{year} </p>
    </div>
  );
};

export default DateDisplayer;
