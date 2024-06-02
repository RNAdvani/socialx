import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const PostItComponent = () => {
  return (
    <Button className='flex min-w-[12rem] items-center text-start justify-start text-black hover:bg-white py-[1.8rem] bg-white rounded-xl border-[1px] border-[#EBEBEB]'>
    <Image src={"/icons/post.svg"} className='mt-[4px]'  width={58} height={58} alt='post' />
    <div>
      <h3 className='text-[11px] font-semibold'>Custom Time</h3>
      <p className='text-[10px] font-normal'>Post it</p>
    </div>
  </Button>
  )
}

export default PostItComponent