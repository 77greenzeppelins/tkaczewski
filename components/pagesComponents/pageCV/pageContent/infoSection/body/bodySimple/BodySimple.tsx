'use client';

import React from 'react';

const BodySimple = ({ text }: { text: string }) => {
  /**...**/
  // console.log('text:', text);
  //   console.log('.........BodySimple');

  /**JSX**/
  return (
    <div className="py-4">
      <p className="text-light p-regular">{text}</p>
    </div>
  );
};

export default BodySimple;
