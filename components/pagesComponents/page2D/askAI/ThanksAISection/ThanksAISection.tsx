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
    <div className="absolute flex justify-end items-end bottom-0 left-0 pl-10">
      <div className="hidden lg:block">
        <ButtonSwitcher onClickHandler={setAskAI}>
          <p className="text-light text-1xl ">
            Thank <span className="text-corpo">AI</span> for your answer...
          </p>
        </ButtonSwitcher>
      </div>

      <div className="lg:hidden bg-corpo w-[28px] h-[28px]"></div>
    </div>
  );
};

export default ThanksAISection;
