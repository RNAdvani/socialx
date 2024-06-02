import Image from 'next/image'
import React from 'react'

const PreviewComponent = ({text,images}:{text:string,images:File[]}) => {
  return (
   <div className="flex bg-white rounded-xl w-full p-2 border-[1px] border-[#E9E9E9]">
         <div className='flex px-2 w-full min-h-[5rem] pt-6 flex-col gap-0'>
        <div className='flex justify-center gap-2 w-full items-center'>
            <Image height={40} className='rounded-full' width={40} alt='northface logo' src={"/northface.png"} />
            <div className="flex gap-1 w-full leading-3 items-center">
                <h1 className='font-semibold text-[14px]'>NorthFace</h1>
                <p className='font-normal text-[#687684] text-[10px]'>@northface_12</p>
                <p className='font-normal text-[#687684] text-[10px]'>3h</p>
            </div>
        </div>
            <div className='w-full h-full rounded-xl mt-2'>
                <p className='w-full px-2 break-words h-full text-ellipsis text-[12px]'>{text|| "Write Something..."}</p>
            </div>
            <div className={`${images ? "border-2" : ""} flex w-full flex-wrap h-full rounded-xl   overflow-hidden`}>
                {images && images.map((image, index) => (
                <img src={URL.createObjectURL(image)} alt={`Preview ${index + 1}`} className="w-[50%]" key={index}/>
            ))}
            </div>

            <Image src={"/icons/likecount.svg"} className='w-full h-full' height={150} width={150} alt='count' />
        </div>
   </div>
  )
}

export default PreviewComponent