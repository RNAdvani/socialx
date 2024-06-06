import Image from 'next/image'
import React, { memo } from 'react'
import ImageCarousel from './ImageCarousel'

const FacebookPostComponent = ({text,images}:{text:string,images:File[]}) => {
  return (
    <div className="flex relative flex-col bg-white  w-full  n border-[1px] border-[#E9E9E9]">
         <div className='flex px-2 w-full min-h-[5rem] max-h-[20rem] pt-6 flex-col gap-0 overflow-y-scroll no-scrollbar'>
        <div className='flex flcol justify-center gap-2 w-full items-center'>
            <Image height={30} className='rounded-full' width={30} alt='northface logo' src={"/northface.png"} />
            <div className="flex gap-1 w-full flex-col leading-3 justify-centerr">
                <h1 className='font-normal text-[#395996] text-[11px]'>NorthFace</h1>
                <p className='font-normal text-[#687684] text-[10px] flex gap-1'>All. <Image src={"/icons/facebookglobe.svg"} width={10}height={10} alt='globe' /> </p>
            </div>
            <Image height={20} className='rounded-full' width={20} alt='northface logo' src={"/icons/threedots.svg"} />

        </div>
            <div className='w-full  h-full rounded-xl my-2'>
                <p className='w-full px-2 break-words h-full text-ellipsis text-[12px]'>{text|| "Write Something..."}</p>
            </div>
           <div className={`h-full w-full rounded-xl p-1`}>
                {
                    images && (
                        images.length > 1 ? <div>
                             <ImageCarousel images={images} />
                        </div> : <div>
                            {images.length  >0  && (<Image src={URL.createObjectURL(images[0])} className='w-full h-full' height={10} width={10} alt='post-image' />)}
                        </div>
                    )
                }
           </div>

        </div>
        <Image src={"/icons/facebooklike.svg"} className='w-full ' height={10} width={10} alt='count' />
        <Image src={"/icons/facebook.png"} className='absolute border-[#EDEDED] border rounded-full top-[-5px] right-[-5px]' width={24} height={24} alt='x-logo' />
   </div>
  )
}

export default FacebookPostComponent