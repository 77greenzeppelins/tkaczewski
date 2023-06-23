import React from 'react';
/**Icon**/
// import { PhoneIcon } from '@heroicons/react/24/solid';
/**Basic Data**/
import { contactData, linksToInstantContactData } from '@/data/basicData';

interface Props {
  aStyle?: string;
  iconStyle?: string;
  labelStyle?: string;
  hasLabel?: boolean;
  isOneLine?: boolean;
}

/**--------------------------------------------------------------------------------**/
const DirectPhone = ({
  aStyle,
  iconStyle,
  labelStyle,
  hasLabel = true,
  isOneLine = false,
}: Props) => {
  return (
    <a
      href={linksToInstantContactData.mobile}
      className={aStyle}
      // className={labelStyle}
      aria-label="Make a phone to Oskar!"
    >
      {/* {hasLabel
        ? `${isOneLine ? 'telefon:' : ''} +48 ${contactData.mobile}`
        : null} */}

      {hasLabel ? (
        <p className={labelStyle}>{`${isOneLine ? 'telefon:' : ''} +48 ${
          contactData.mobile
        }`}</p>
      ) : null}
    </a>
  );
};

export default DirectPhone;
