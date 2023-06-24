'use client';
import React from 'react';

const BodyComplex = ({ text }: { text: { col1: string; col2: string[] } }) => {
  //   console.log('text:', text);

  /**JSX**/
  return (
    <div className="flex w-full py-4">
      <div className="w-4/12 lg:w-1/4 pr-2">
        <p className="text-light p-regular">{text.col1}</p>
      </div>
      <div className="w-8/12 lg:w-3/4">
        {text.col2.map((p, i) => (
          <p key={i} className="text-light p-regular">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BodyComplex;
