'use client';
import React from 'react';
/**GlobalContext  Staff**/
import { useGlobalContext } from '@/context/globalContext';
/**Components**/
import ButtonSwitcher from '@/components/multipagesComponents/_basicComponents/buttons/buttonSwitcher/ButtonSwitcher';

const DoubtsSection = () => {
  /**GlobalContext  Section**/
  const { askAI, setAskAI } = useGlobalContext();

  /**JSX**/
  return (
    <div className={`flex flex-col`}>
      <p className="text-3xl text-light ">Any doubts?</p>
      <div className="flex gap-2 pl-1">
        <ButtonSwitcher onClickHandler={setAskAI}>
          <p className="text-3xl text-light">
            Ask <span className="text-corpo">AI</span>
          </p>
        </ButtonSwitcher>
      </div>
    </div>
  );
};

export default DoubtsSection;
