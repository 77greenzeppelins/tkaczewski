'use client';
import React from 'react';
/**GlobalContext  Staff**/
import { useGlobalContext } from '@/context/globalContext';
/**Components**/
import ButtonWithChild from '@/components/multipagesComponents/_basicComponents/buttons/buttonWithChild/ButtonWithChild';

/**------------------------**/
const AskAI = () => {
  /**GlobalContext  Section**/
  const { askAI, setAskAI } = useGlobalContext();

  // console.log('...AskAI / askAI:', askAI);
  /**JSX**/
  return (
    <div className="fc  w-full h-full">
      <div className="flex items-center flex-col w-[90%] h-[90%] border border-corpo pt-10">
        <ButtonWithChild onClickHandler={setAskAI}>
          <p className="text-light text-1xl min-w-[60px]">
            {askAI ? 'TRUE' : 'FALSE'}
          </p>
        </ButtonWithChild>
      </div>
    </div>
  );
};

export default AskAI;
