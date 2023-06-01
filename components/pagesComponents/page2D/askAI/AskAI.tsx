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
      <div className="flex flex-col justify-center w-[96%] lg:w-[90%]  border-l border-corpo pl-10">
        <p className="text-light text-3xl ">Any doubts?</p>
        <div className="flex gap-2 pl-1">
          <p className="text-light text-3xl ">Ask</p>
          <ButtonWithChild onClickHandler={setAskAI}>
            <p className="text-corpo text-3xl ">AI</p>
          </ButtonWithChild>
        </div>
      </div>
    </div>
  );
};

export default AskAI;
