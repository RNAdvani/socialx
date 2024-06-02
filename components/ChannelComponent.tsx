"use client"
import { ImageTypes } from '@/types/types'
import { imageTypes } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'



const ChannelComponent = ({id,type,}:{id:string,type:keyof ImageTypes}) => {

  const src =  imageTypes[`${type}`]

  const {id:channelId} = useParams();
  return (
    <Link href={`/schedule/${id}`} >
        <div className={`${channelId === id ? "border-[#6335EC] border-2 purple-tint" :""} flex px-2 gap-4 bg-white text py-4 rounded-xl`} >
        <div className='border-[#EDEDED] relative border-[8px] text-center rounded-full logo-box-shadow '>
            <Image src={src} className='rounded-full bg-white' height={24} width={24} alt='instagram' />
            <Image className='absolute rounded-full right-[-6px] bottom-[-12px]' src={"/northface.png"} width={15} height={15} alt='instagram' />
        </div>
        <div className={`flex flex-col leading-3 justify-center  w-full ${channelId===id?"border-[#6335EC] border-r-2":""}`}> 
            <h1 className={`${channelId === id ? "text-[#6335EC]" :""} font-semibold text-[14px] p-0`}>NorthFace</h1>
            <p className='font-light text-[10px] p-0'>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
        </div>
    </div>
    </Link>
  )
}

export default ChannelComponent