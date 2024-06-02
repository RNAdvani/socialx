import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const SuggestedTimeComponent = () => {
  return (
    <Button className='flex items-center text-black justify-start text-start w-[12rem] suggested-dropshadow hover:bg-white bg-white rounded-xl border-[1px] gap-4 border-[#EBEBEB] py-[1.8rem]'>
              <Image src={"/icons/clock.svg"} className='mt-[4px]'  width={34} height={34} alt='post' />
              <div>
                <p className='text-[10px] font-normal'>Suggested Time</p>
                <p className='text-[13px] font-semibold'>3:35 PM</p>
              </div>
    </Button>
  )
}

export default SuggestedTimeComponent