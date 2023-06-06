import { useState, useEffect } from 'react';

/**TS**/
interface IF_DateInfo {
  year: number;
  month: number;
  day: number;
  weekday: string;
}

const useDate = (): IF_DateInfo => {
  /**State Section**/
  const [dateInfo, setDateInfo] = useState<IF_DateInfo>({
    year: 0,
    month: 0,
    day: 0,
    weekday: '',
  });

  /**Settings Section**/
  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();
    const weekday = currentDate.toLocaleString('default', { weekday: 'long' });

    setDateInfo({ year, month, day, weekday });
  }, []);

  /**Return Section**/
  return dateInfo;
};

export default useDate;

/*
if you need polish wersion use it in <DateDisplayer>
*/
//   const createMonthName = () => {
//     switch (month) {
//       case 0:
//         return 'stycznia';
//       case 1:
//         return 'lutego';
//       case 2:
//         return 'marca';
//       case 3:
//         return 'kwietnia';
//       case 4:
//         return 'maja';
//       case 5:
//         return 'czerwca';
//       case 6:
//         return 'lipca';
//       case 7:
//         return 'sierpnia';
//       case 8:
//         return 'września';
//       case 9:
//         return 'października';
//       case 10:
//         return 'listopada';
//       case 11:
//         return 'grudnia';
//       default:
//         console.log('I love web development');
//     }
//   };
