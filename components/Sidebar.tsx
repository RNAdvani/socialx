'use client'
import Image from 'next/image'
import React from 'react'
import DropDown from './DropDown'
import { GoArrowLeft } from "react-icons/go";
import Link from 'next/link';
import { navbarLinks } from '@/utils/index';
import { usePathname } from 'next/navigation';


const Sidebar = () => {
    const pathName = usePathname();
  return (
    <nav className='flex sticky left-0 top-0 flex-col w-[20%] bg-white p-[0.6rem] gap-4 mx-[1px]'>
        <Link href={"/"}>
        <h2 className='font-medium text-[16px] p-1 text-[#4B4652]'>
            Social<i>X</i>
        </h2>
        </Link>
        <div className="flex rounded-lg box-shadow justify-around gap-2 items-center px-2 py-3">
            <Image height={28} className='rounded-full' width={28} alt='north face logo' src={"/northface.png"} />
            <p className='font-medium text-[14px] text-black' >The North Face</p>
            <DropDown />
        </div>
        <Link href={"/"} className={`${pathName === "/" ? "hidden":"block"} px-2 py-3 flex text-[14px] font-normal text-[#000000] justify-start items-center gap-2 border-b-2`}>
            <GoArrowLeft /> 
            <p >Return to Main Menu</p>
        </Link>
        <div className="flex flex-col gap-2">
            <p className='text-[#726E7A] text-[12px] font-normal'>Social Media</p>
            {
                navbarLinks.map((i)=>{
                   const isActive = pathName === `${i.route.toLowerCase()}` || pathName.startsWith(`${i.route.toLowerCase()}/`);
                    return (
                    <Link href={i.route.toLowerCase()} className={`${isActive ?"bg-[#6335EC] text-white":""} flex font-normal text-[14px] text-black p-3 items-center gap-2  rounded-xl`} >
                        <Image src={`${i.logo}`} className={"svg-colour"} width={18} height={18} alt='icon' key={i.route} /> {i.route.replace('/','')}
                    </Link>)})
            }
            
        </div>
    </nav>
  )
}

export default Sidebar