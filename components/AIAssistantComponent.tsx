import Image from 'next/image'
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea';
import ResultComponent from './ResultComponent';

const AIAssistantComponent = () => {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState(false);

  return (
    <div className='w-[35rem] flex flex-col min-h-[12rem]  rounded-xl p-0 '>
        <div className={`ai-modal-gradient h-full flex flex-col p-4  border-b-2 border-[#BCBCBC6E] ${(query || results) ? "rounded-lg":"rounded-t-lg"} `}>
            <div className='w-full flex gap-2 '>
                <Image src={"/icons/aimodal.svg"} className={``} width={40} height={40} alt='ailogo'  />
                <div className="w-full leading-[1rem] ">
                    <h2 className='font-bold text-[20] text-[#1F0357]'>AI Assistant</h2>
                    <p className='font-normal text-[11px] text-[#4B4652]'>What can I help you with</p>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='font-medium p-1 text-[8px]  tracking-[2px] uppercase text-black'>Write Text</p>
                <div className='w-full h-full relative flex'>
                    <Image src={"/icons/ai.svg"} width={16} height={16} alt='ai' className={`${query ? "hidden" :"block"} absolute left-2 top-[10px]`} />
                    <Textarea placeholder='Enter Prompt' onChange={(e)=>setQuery(e.target.value)} className={`w-full outline-none focus:outline-none duration-300 ${query?"h-[10rem] text-start justify-start items-start":"h-[2.6rem] pl-[2rem]"} placeholder:text-[#9C9AA1] placeholder:font-normal  resize-none`} />
                    <button className='button-gradient right-1 bottom-1  absolute z-10 text-white text-[12px] font-medium flex p-2 px-4 rounded-lg' onClick={()=>setResults(true)} >
                      <Image src={"/icons/sparkle.svg"} width={16} height={16} alt='sparkle' /> Generate
                    </button>
                </div>

            </div>
        </div>
        <div className={`${results ? "hidden" :"block"} flex flex-col p-4 gap-2`}>
            <p className='font-medium text-[8px] tracking-[2px] uppercase text-black'>Quick Actions</p>
            <div className="flex justify-between">
                <button className='border-[#E9E9E9] border px-4 py-2 w-[32%] text-start rounded-xl'>
                    <Image src={"/icons/layers.svg"} width={20} height={20} alt='layers' />
                    <p className="text-[12px] font-medium">
                        Rephrase
                    </p>
                </button>
                <button className='border-[#E9E9E9] border px-4 py-2 w-[32%] text-start rounded-xl'>
                    <Image src={"/icons/layers.svg"} width={20} height={20} alt='layers' />
                    <p className="text-[12px] font-medium">
                        Check Grammar
                    </p>
                </button>
                <button className='border-[#E9E9E9] border px-4 py-2 w-[32%] text-start rounded-xl'>
                    <Image src={"/icons/layers.svg"} width={20} height={20} alt='layers' />
                    <p className="text-[12px] font-medium">
                        Expand
                    </p>
                </button>
            </div>
        </div>
        {
            results && (
                <div className='w-full h-full'>
                    <ResultComponent />
                    <div className='flex flex-col gap-2 p-4 border-t-[1px]'>
                    <div>
                        <h2 className='text-[10px] uppercase font-medium tracking-[2px]'>
                            Modify Prompt
                        </h2>
                    </div>
                        <div className=' flex gap-2 p-1'>
                        <button className='border-[#E9E9E9] border px-4 flex gap-2 py-2 text-start rounded-xl'>
                            <Image src={"/icons/layers.svg"} width={20} height={20} alt='layers' />
                            <p className="text-[12px] font-medium">
                                Rephrase
                            </p>
                        </button>
                        <button className='border-[#E9E9E9] border px-4 flex gap-2 py-2 text-start rounded-xl'>
                            <Image src={"/icons/layers.svg"} width={20} height={20} alt='layers' />
                            <p className="text-[12px] font-medium">
                                More Formal
                            </p>
                        </button>
                        <button className='border-[#E9E9E9] border px-4 flex gap-2 py-2 text-start rounded-xl'>
                            <Image src={"/icons/layers.svg"} width={20} height={20} alt='layers' />
                            <p className="text-[12px] font-medium">
                                Shorten
                            </p>
                        </button>
                        <button className='border-[#E9E9E9] border px-4 flex gap-2 py-2 text-start rounded-xl'>
                            <Image src={"/icons/layers.svg"} width={20} height={20} alt='layers' />
                            <p className="text-[12px] font-medium">
                                Expand
                            </p>
                        </button>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default AIAssistantComponent