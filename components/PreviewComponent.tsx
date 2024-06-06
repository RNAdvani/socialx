import Image from 'next/image'
import React, { useRef } from 'react'

const PreviewComponent = ({text,images}:{text:string,images:File[]}) => {
    
    
  return (
   <div className="flex relative flex-col bg-white rounded-xl w-full p-2  n border-[1px] border-[#E9E9E9]">
         <div className='flex px-2 w-full min-h-[5rem] max-h-[20rem] pt-6 flex-col gap-0 overflow-y-scroll no-scrollbar'>
        <div className='flex justify-center gap-2 w-full items-center'>
            <Image height={40} className='rounded-full' width={40} alt='northface logo' src={"/northface.png"} />
            <div className="flex gap-1 w-full leading-3 items-center">
                <h1 className='font-semibold text-[14px]'>NorthFace</h1>
                <p className='font-normal text-[#687684] text-[10px]'>@northface_12</p>
                <p className='font-normal text-[#687684] text-[10px]'>3h</p>
            </div>
        </div>
            <div className='w-full  h-full rounded-xl my-2'>
                <p className='w-full px-2 break-words h-full text-ellipsis text-[12px]'>{text|| "Write Something..."}</p>
            </div>
           <div className={`${images.length > 0 ? "border-2" : ""} h-full w-full rounded-xl p-1`}>
                <div className={` flex w-full flex-wrap rounded-xl `}>
                    {images && images.map((image, index) => (
                    <img src={URL.createObjectURL(image)} alt={`Preview ${index + 1}`} className="w-[50%] " key={index}/>
                ))}
                </div>
           </div>

        </div>
        <Image src={"/icons/likecount.svg"} className='w-full h-[2rem]' height={150} width={150} alt='count' />
        <Image src={"/icons/x.svg"} className='absolute top-[-5px] right-[-5px]' width={24} height={24} alt='x-logo' />
   </div>
  )
}

export default PreviewComponent