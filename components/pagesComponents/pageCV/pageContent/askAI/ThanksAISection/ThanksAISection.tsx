'use client';
import React from 'react';
/**GlobalContext  Staff**/
import { useGlobalContext } from '@/context/globalContext';
/**Components**/
import ButtonSwitcher from '@/components/multipagesComponents/_basicComponents/buttons/buttonSwitcher/ButtonSwitcher';

const ThanksAISection = () => {
  /**GlobalContext  Section**/
  const { askAI, setAskAI } = useGlobalContext();

  /**JSX**/
  return (
    <ButtonSwitcher onClickHandler={setAskAI}>
      <p className="text-light text-1xl ">
        Thank <span className="text-corpo">AI</span> for your answer...
      </p>
    </ButtonSwitcher>
  );
};

export default ThanksAISection;
