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
}

/**--------------------------------------------------------------------------------**/
const DirectEmail = ({
  aStyle,
  iconStyle,
  labelStyle,
  hasLabel = true,
}: Props) => {
  return (
    <a href={linksToInstantContactData.mail} className={aStyle}>
      {hasLabel ? (
        <p className={labelStyle}>{`email: ${contactData.mail}`}</p>
      ) : null}
    </a>
  );
};

export default DirectEmail;
