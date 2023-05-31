'use client';
import React from 'react';
/**GlobalContext  Staff**/
import { useGlobalContext } from '@/context/globalContext';
/**Components**/
import ButtonWithChild from '@/components/multipagesComponents/_basicComponents/buttons/buttonWithChild/ButtonWithChild';

/**------------------------**/
const AskAI = () => {
  const { askAI, setAskAI } = useGlobalContext();

  console.log('...AskAI / askAI:', askAI);
  /**JSX**/
  return (
    <div className="fc flex-col">
      <ButtonWithChild onClickHandler={setAskAI}></ButtonWithChild>
      <p className="text-light text-1xl">{askAI}</p>
    </div>
  );
};

export default AskAI;
