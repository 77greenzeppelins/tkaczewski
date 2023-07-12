'use client';
import {
  //__staff for context
  createContext,
  useContext,
  //__staff for establishing state
  Dispatch,
  SetStateAction,
} from 'react';

//------------------------------------------------------------------C O N T E X T
interface ContextProps {
  isIntroOverlay: boolean;
  setIsIntroOverlay: Dispatch<SetStateAction<boolean>>;
  askAI: boolean;
  setAskAI: Dispatch<SetStateAction<boolean>>;
  scrollableHeight: number;
  setScrollableHeight: Dispatch<SetStateAction<number>>;
  hintIsMobile: boolean;
  setHintIsMobile: Dispatch<SetStateAction<boolean>>;
  isDz: boolean;
  setIsDz: Dispatch<SetStateAction<boolean>>;
  // hintIsMobile: true | false;
  // setHintIsMobile: Dispatch<SetStateAction<true | false>>;
  // property1: DataType[];
  // setProperty1: Dispatch<SetStateAction<DataType[]>>;
}
/*
___0. Here we create context;
___1. It is ment to be used as top level global state is accessible in both 3D & 2D world
*/
export const GlobalContext = createContext<ContextProps>({
  isIntroOverlay: true,
  setIsIntroOverlay: (prev): boolean => !prev,
  askAI: false,
  setAskAI: (prev): boolean => !prev,
  scrollableHeight: 0,
  setScrollableHeight: val => val,
  hintIsMobile: false,
  setHintIsMobile: val => val,
  //___used in: 3D PageContacts,
  isDz: false,
  setIsDz: val => val,
  // hintIsMobile: false,
  // setHintIsMobile: (val): true| false => true|| false,
  // property1: [],
  // setProperty1: (): DataType[] => [],
});

/*
___1. it's a custom hook
___2. it is used in components that need access to "global values (setters/getters)"
*/
export const useGlobalContext = () => useContext(GlobalContext);
