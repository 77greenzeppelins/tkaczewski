'use client';
import {
  //__staff for context
  createContext,
  useContext,
  //__staff for establishing state
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

type DataType = {
  fakeType: boolean;
};

interface ContextProps {
  isIntroOverlay: boolean;
  setIsIntroOverlay: Dispatch<SetStateAction<boolean>>;
  askAI: boolean;
  setAskAI: Dispatch<SetStateAction<boolean>>;
  property1: DataType[];
  setProperty1: Dispatch<SetStateAction<DataType[]>>;
}

interface ProviderProps {
  children: React.ReactNode;
  IntroOverlay: () => React.JSX.Element;
  CanvasOverlay: () => React.JSX.Element;
  MainCanvas: () => React.JSX.Element;
}

/*
___0. Here we create context;
___1. It is ment to be used as top level global state that wraps around 3D&2D world
*/
const GlobalContext = createContext<ContextProps>({
  isIntroOverlay: true,
  setIsIntroOverlay: (prev): boolean => !prev,
  askAI: false,
  setAskAI: (prev): boolean => !prev,
  property1: [],
  setProperty1: (): DataType[] => [],
});

/*
___1. we can't add provider to some _app.js file to wrap it around our application content; it worked in next.js before app directory and concept of server-side rendered layout were introduced / applied;
___2. we actually face the following issue: how to wrap "RootLayout" and keep it "server-side"; we can't put <Provider> in it !;   
___3. We have to creat <Provider> here, in that file because it requiers "client environment" to work;
*/

export const GlobalContextProvider = ({
  children,
  IntroOverlay,
  MainCanvas,
  CanvasOverlay,
}: ProviderProps) => {
  const [isIntroOverlay, setIsIntroOverlay] = useState(true);
  const [askAI, setAskAI] = useState(false);
  const [property1, setProperty1] = useState<[] | DataType[]>([]);
  return (
    <GlobalContext.Provider
      value={{
        isIntroOverlay,
        setIsIntroOverlay,
        askAI,
        setAskAI,
        property1,
        setProperty1,
      }}
    >
      <>
        <IntroOverlay />
        <div className="fixed w-screen h-screen z-1">
          <CanvasOverlay />
          {/* {CanvasToRender} */}
          <MainCanvas />
        </div>
        <div className="relative z-10">{children}</div>
      </>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
