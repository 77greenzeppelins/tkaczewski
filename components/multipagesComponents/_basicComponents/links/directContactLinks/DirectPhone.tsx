import React from 'react';
/**Icon**/
// import { PhoneIcon } from '@heroicons/react/24/solid';
/**Basic Data**/
import { contactData, linksToInstantContactData } from '@/data/basicData';

interface Props {
  aStyle?: string;
  iconStyle?: string;
  labelStyle?: string;
}

/**--------------------------------------------------------------------------------**/
const DirectPhone = ({ aStyle, iconStyle, labelStyle }: Props) => {
  return (
    <a href={linksToInstantContactData.mobile} className={aStyle}>
      {/* <PhoneIcon className={iconStyle} /> */}
      <p className={labelStyle}>{`telefon: +48 ${contactData.mobile}`}</p>
    </a>
  );
};

export default DirectPhone;
