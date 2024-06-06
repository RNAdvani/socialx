"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'


const OptionComponent = ({option,text}:{option:number,text:string}) => {
    const [isCopied, setIsCopied] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = async () => {
        try {
          await navigator.clipboard.writeText(text);
          setIsCopied(true);
        } catch (err) {
          console.error('Failed to copy text:', err);
        }
      };

      useEffect(()=>{
        if(isCopied){
            setTimeout(()=>{
                setIsCopied(false);
            },1000)
        }
      },[isCopied])

  return (
    <div className='p-4 flex w-full flex-col gap-2 border border-[#455FD930] rounded-lg'>
        <div className='flex justify-between'>
            <p className='tracking-[2px] text-[#4954DC] uppercase text-[8px] font-medium'>Option {option}</p>  
            {option === 1 && (<Image src={"/icons/bestchoice.svg"} width={100} height={100} alt='bestchoice' />)}
        </div>
        <div>
            <p className='text-[13px] font-semibold'>{text}</p>
        </div>
        <div className="flex justify-start gap-4">
            <button className={`${isCopied ? "opacity-50 relative": ""} duration-200`} onClick={handleClick} >
                <Image src={"/icons/copy.svg"} width={40} className='' height={40} alt='copy-icon' />
            </button>
            <button className='button-gradient text-[12px] font-medium text-white rounded-lg flex items-center px-4'>
                Enter text
                <Image src={"/icons/rightarrow.svg"}  width={10} height={10} alt='copy-icon' />
            </button>
        </div>
    </div>
  )
}

export default OptionComponent