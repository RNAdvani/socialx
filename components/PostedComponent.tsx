import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const PostedComponent = () => {
  return (
    <Button className='flex items-center text-black justify-start text-start w-[25rem] suggested-dropshadow green-gradient hover:bg-white bg-white rounded-xl border-[1px] gap-4 border-[#EBEBEB] py-[1.8rem]'>
    <Image src={"/icons/tick.svg"} className=''  width={34} height={34} alt='post' />
    <div className='w-full'>
      <p className='text-[10px] font-normal'>Suggested Time</p>
      <p className='text-[13px] font-semibold'>3:35 PM</p>
    </div>
    <Image src={"/icons/edit.svg"} className='mt-[4px]'  width={34} height={34} alt='post' />
    </Button>
  )
}

export default PostedComponent