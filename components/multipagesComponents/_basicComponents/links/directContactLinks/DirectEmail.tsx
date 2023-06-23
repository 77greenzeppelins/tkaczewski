import React from 'react';
/**Icon**/
// import { EnvelopeIcon } from '@heroicons/react/24/solid';
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
const DirectEmail = ({
  aStyle,
  iconStyle,
  labelStyle,
  hasLabel = true,
  isOneLine = false,
}: Props) => {
  return (
    <a
      href={linksToInstantContactData.mail}
      className={aStyle}
      aria-label="Send email to Oskar!"
    >
      {hasLabel ? (
        <p className={labelStyle}>{`${isOneLine ? 'email:' : ''} ${
          contactData.mail
        }`}</p>
      ) : null}
    </a>
  );
};

export default DirectEmail;
