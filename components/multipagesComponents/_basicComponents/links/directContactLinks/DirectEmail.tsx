import React from 'react';
/**Icon**/
// import { EnvelopeIcon } from '@heroicons/react/24/solid';
/**Basic Data**/
import { contactData, linksToInstantContactData } from '@/data/basicData';
// import { linksToInstantContactData } from '../../../../data/_data';

interface Props {
  aStyle?: string;
  iconStyle?: string;
  labelStyle?: string;
}

/**--------------------------------------------------------------------------------**/
const DirectEmail = ({ aStyle, iconStyle, labelStyle }: Props) => {
  return (
    <a href={linksToInstantContactData.mail} className={aStyle}>
      {/* <EnvelopeIcon className={iconStyle} /> */}
      <p className={labelStyle}>{`email: ${contactData.mail}`}</p>
    </a>
  );
};

export default DirectEmail;
