import React, { useState } from 'react';
import { Button } from './ui/button';
Button

const SwitchButtonGroup: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>('option1');

  const handleButtonClick = (option: string) => {
    setActiveButton(option);
  };

  return (
    <div className='flex border-2 border-[#CCCCCC] rounded-lg'>
      <Button
        className={`${activeButton === "option1"? "button-active":"bg-white text-black hover:bg-white"} w-[4.125rem]`}
        onClick={() => handleButtonClick('option1')}
      >
       Day
      </Button>
      <Button
        className={`${activeButton === "option2"? "button-active":"bg-white text-black hover:bg-white"} w-[4.125rem] `}
        onClick={() => handleButtonClick('option2')}
      >
       Month
      </Button>
    </div>
  );
};

export default SwitchButtonGroup;
