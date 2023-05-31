import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  children?: React.ReactNode;
  onClickHandler: Dispatch<SetStateAction<boolean>>;
}

const ButtonWithChild = ({ children, onClickHandler }: Props) => {
  /**LocalState**/
  const [isDisabled, setIsDisabled] = React.useState(false);
  /**onClick Handler*/
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // event.stopPropagation();
    //___disable button
    setIsDisabled(true);
    //___do what you need to do...
    // globalState.isCatalogOpened = !snap.isCatalogOpened;
    onClickHandler(prev => !prev);
    //___set timer...
    const timer = setTimeout(() => {
      setIsDisabled(false);
    }, 1000); // disable button for 1 seconds
    //___clear timer...
    return () => {
      clearTimeout(timer);
    };
  };

  /**JSX**/
  return (
    <div className="w-6 h-6">
      <button
        disabled={isDisabled}
        aria-label={'przycisk'}
        // aria-expanded={snap.isCatalogOpened ? 'true' : 'false'}
        onClick={event => onClick(event)}
        className=" fc origin-center w-6 focus:outline-none disable pointer-events-auto focus-visible:ring focus-visible:ring-offset-2 ring-offset-dark focus-visible:ring-corpo"
        // animate={{
        //   rotateY: snap.isCatalogOpened ? 180 : 0,
        //   transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' },
        // }}
      >
        {children ? children : <p className="text-corpo text-2xl">BUTTON</p>}
      </button>
    </div>
  );
};

export default ButtonWithChild;
