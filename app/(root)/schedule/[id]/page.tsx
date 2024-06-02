"use client"
import Background from '@/components/Background'
import CustomDialog from '@/components/Modal'
import Modal, { DialogHandle } from '@/components/Modal'
import PostItComponent from '@/components/PostItComponent'
import PostedComponent from '@/components/PostedComponent'
import SuggestedTimeComponent from '@/components/SuggestedTimeComponent'
import SwitchButtonGroup from '@/components/SwitchCompnent'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useRef,useImperativeHandle } from 'react'


const page = () => {
  const dialogRef = useRef<DialogHandle>(null);

  const handleOpenDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.open();
    }
  };
  return (
    <section className='relative  w-full flex flex-col  no-scrollbar '>
           <div className='px-8 flex justify-between items-center p-2'>
              <h1 className='text-[#34303B] font-semibold text-[18px]'>Schedule</h1>
              <SwitchButtonGroup />
           </div>
          <Background />
        <div className='w-full flex flex-col gap-4 p-8 no-scrollbar'>
      
          <div className='flex flex-col'>
            <h1 className='font-bold text-[17px]'>Hey Kodi Wilson 👋</h1>
            <p className='text-[11px] font-normal'>Lets post something extraordinary today</p>
          </div>
          <div className='flex gap-[2.5rem] w-full text-center leading-6'>
            <div>
              <Button onClick={handleOpenDialog} className='relative hover:bg-white w-[3rem] h-[3rem] rounded-xl bg-white'>
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5245 9.48655C18.6195 9.39157 18.6729 9.26274 18.6729 9.12842C18.6729 8.99409 18.6195 8.86527 18.5245 8.77029C18.4295 8.6753 18.3007 8.62194 18.1664 8.62194H10.2804V0.735967C10.2804 0.601641 10.227 0.472818 10.1321 0.377836C10.0371 0.282853 9.90825 0.229492 9.77393 0.229492C9.6396 0.229492 9.51078 0.282853 9.41579 0.377835C9.32081 0.472818 9.26745 0.601642 9.26745 0.735967V8.62194H1.38148C1.24715 8.62194 1.11833 8.6753 1.02334 8.77029C0.928361 8.86527 0.875 8.99409 0.875 9.12842C0.875 9.26274 0.928361 9.39157 1.02334 9.48655C1.11833 9.58153 1.24715 9.63489 1.38148 9.63489H9.26745V17.5209C9.26745 17.6552 9.32081 17.784 9.41579 17.879C9.51078 17.974 9.6396 18.0273 9.77393 18.0273C9.90825 18.0273 10.0371 17.974 10.1321 17.879C10.227 17.784 10.2804 17.6552 10.2804 17.5209V9.63489H18.1664C18.3007 9.63489 18.4295 9.58153 18.5245 9.48655Z" fill="#5E17EB" stroke="#5E17EB" stroke-width="0.25"/>
              </svg>
              <Image src={"/icons/instagram.jpg"} className='rounded-full  absolute bottom-[-6px] right-[-1px]' width={18} height={18} alt='insta' />
              </Button>
              <p className='text-[10px] font-medium'>New Post</p>
            </div>
            <div>
              <Button className='relative  hover:bg-white w-[3rem] h-[3rem] rounded-xl bg-white'>
              <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.2923 8.7569C10.4572 8.26195 11.1562 8.26195 11.3211 8.7569L12.2885 11.6621C12.5015 12.3007 12.8602 12.881 13.3364 13.3569C13.8125 13.8328 14.393 14.1912 15.0317 14.4038L17.9354 15.3712C18.4304 15.5362 18.4304 16.2351 17.9354 16.4001L15.0302 17.3675C14.3916 17.5804 13.8113 17.9392 13.3355 18.4153C12.8596 18.8915 12.5011 19.4719 12.2885 20.1107L11.3211 23.0144C11.2856 23.1227 11.2167 23.2171 11.1243 23.284C11.0319 23.351 10.9208 23.387 10.8067 23.387C10.6926 23.387 10.5815 23.351 10.4891 23.284C10.3967 23.2171 10.3278 23.1227 10.2923 23.0144L9.32485 20.1092C9.11207 19.4707 8.75354 18.8906 8.27766 18.4147C7.80178 17.9388 7.22162 17.5803 6.58315 17.3675L3.67796 16.4001C3.56958 16.3645 3.4752 16.2956 3.40829 16.2032C3.34138 16.1109 3.30535 15.9997 3.30535 15.8856C3.30535 15.7716 3.34138 15.6604 3.40829 15.568C3.4752 15.4756 3.56958 15.4068 3.67796 15.3712L6.58315 14.4038C7.22162 14.191 7.80178 13.8325 8.27766 13.3566C8.75354 12.8807 9.11207 12.3006 9.32485 11.6621L10.2923 8.7569ZM4.49837 1.10922C4.51988 1.04427 4.56131 0.987745 4.61677 0.947684C4.67224 0.907624 4.73892 0.886061 4.80734 0.886061C4.87576 0.886061 4.94244 0.907624 4.9979 0.947684C5.05337 0.987745 5.0948 1.04427 5.1163 1.10922L5.69674 2.85203C5.95621 3.62895 6.56515 4.23788 7.34207 4.49735L9.08488 5.07779C9.14983 5.0993 9.20635 5.14073 9.24641 5.1962C9.28647 5.25166 9.30804 5.31834 9.30804 5.38676C9.30804 5.45518 9.28647 5.52186 9.24641 5.57732C9.20635 5.63279 9.14983 5.67422 9.08488 5.69573L7.34207 6.27616C6.9589 6.40382 6.61072 6.61897 6.32514 6.90456C6.03955 7.19014 5.8244 7.53832 5.69674 7.92149L5.1163 9.6643C5.0948 9.72925 5.05337 9.78577 4.9979 9.82583C4.94244 9.8659 4.87576 9.88746 4.80734 9.88746C4.73892 9.88746 4.67224 9.8659 4.61677 9.82583C4.56131 9.78577 4.51988 9.72925 4.49837 9.6643L3.91793 7.92149C3.79027 7.53832 3.57512 7.19014 3.28954 6.90456C3.00395 6.61897 2.65578 6.40382 2.27261 6.27616L0.529797 5.69573C0.464846 5.67422 0.408324 5.63279 0.368264 5.57732C0.328203 5.52186 0.306641 5.45518 0.306641 5.38676C0.306641 5.31834 0.328203 5.25166 0.368264 5.1962C0.408324 5.14073 0.464846 5.0993 0.529797 5.07779L2.27261 4.49735C2.65578 4.36969 3.00395 4.15455 3.28954 3.86896C3.57512 3.58338 3.79027 3.2352 3.91793 2.85203L4.49837 1.10922Z" fill="#5E17EB"/>
              </svg>
              </Button>
              <p className='text-[10px] font-medium'>AI Generate</p>
            </div>
            <div>
              <Button className='relative hover:bg-white w-[3rem] h-[3rem] rounded-xl bg-white'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.6641 1.35585L2.25473 12.7664L2.11575 12.9185C1.89472 13.1817 1.73342 13.4897 1.64298 13.8213L0.32921 18.638L0.311392 18.7331C0.301352 18.8292 0.314931 18.9263 0.350949 19.016C0.386968 19.1057 0.444338 19.1853 0.518079 19.2478C0.591819 19.3103 0.679702 19.3539 0.774096 19.3747C0.868491 19.3955 0.966544 19.393 1.05974 19.3674L5.87533 18.0536L6.07132 17.9906C6.39323 17.8719 6.68664 17.6854 6.93015 17.4418L18.3407 6.03127L18.4951 5.86496C19.0573 5.21863 19.3466 4.37932 19.3022 3.52386C19.2577 2.66841 18.8829 1.86361 18.2568 1.27905C17.6306 0.694479 16.802 0.375785 15.9455 0.390111C15.089 0.404438 14.2716 0.750667 13.6653 1.35585M3.09336 13.6062L12.6426 4.05823L15.6372 7.05282L6.08914 16.6008L5.97273 16.703L5.84563 16.7885C5.75655 16.8403 5.66112 16.8802 5.56173 16.9073L1.74633 17.9479L2.78808 14.1337L2.83797 13.9876C2.8975 13.8451 2.98425 13.7155 3.09336 13.6062ZM17.4997 2.19567L17.6304 2.33821C18.3241 3.16971 18.2801 4.40984 17.4997 5.19145L16.477 6.21301L13.4824 3.21841L14.5039 2.19685L14.6465 2.06619C15.0526 1.72807 15.5705 1.55401 16.0984 1.57819C16.6264 1.60236 17.1262 1.82303 17.4997 2.19685M11.7671 1.57323H0.900571C0.743051 1.57323 0.591982 1.6358 0.480599 1.74719C0.369215 1.85857 0.306641 2.00964 0.306641 2.16716C0.306641 2.32468 0.369215 2.47575 0.480599 2.58713C0.591982 2.69851 0.743051 2.76109 0.900571 2.76109H10.5793L11.7671 1.57323ZM8.20353 5.13681H0.900571C0.743051 5.13681 0.591982 5.19938 0.480599 5.31077C0.369215 5.42215 0.306641 5.57322 0.306641 5.73074C0.306641 5.88826 0.369215 6.03933 0.480599 6.15071C0.591982 6.26209 0.743051 6.32467 0.900571 6.32467H7.01567L8.20353 5.13681ZM3.45209 9.88825L4.63995 8.70039H0.900571C0.743051 8.70039 0.591982 8.76296 0.480599 8.87434C0.369215 8.98573 0.306641 9.1368 0.306641 9.29432C0.306641 9.45184 0.369215 9.60291 0.480599 9.71429C0.591982 9.82567 0.743051 9.88825 0.900571 9.88825H3.45209Z" fill="#5E17EB"/>
              </svg>
              </Button>
              <p className='text-[10px] font-medium'>Drafts</p>
            </div>
          </div>
          <div className='flex flex-col gap-4 border-b-[1px] pb-[1rem] '>
            <div className='flex items-center gap-2 small-underline'>
              <h1 className='text-[15] font-medium'>Today</h1>
              <p className='text-[10px] text-[#120F1A] pt-[1px] font-normal'>May 18</p>
            </div>
            <PostItComponent />
            <div className="flex gap-4">
            <SuggestedTimeComponent />
            <SuggestedTimeComponent />
            <SuggestedTimeComponent />
            </div>
          </div>

          <div className="flex flex-col gap-4 border-b-[1px] pb-[1rem]">
          <div className='flex items-center gap-2'>
              <h1 className='text-[15] font-medium'>Tomorrow</h1>
              <p className='text-[10px] text-[#120F1A] pt-[1px] font-normal'>May 19</p>
            </div>
            <div className="flex gap-4">
            <PostedComponent />
            <PostItComponent />
            </div>
          </div>
          {/* Starts here */}
            <div className="flex flex-col gap-4 border-b-[1px] pb-[1rem]">
            <div className='flex items-center gap-2'>
                <h1 className='text-[15] font-medium'>Monday</h1>
                <p className='text-[10px] text-[#120F1A] pt-[1px] font-normal'>May 20</p>
              </div>
              <div className="flex gap-4">
              <SuggestedTimeComponent />
              <PostItComponent />
              </div>
            </div>
          {/* Ends here */}
        </div>
        <div>
        </div>
              <CustomDialog ref={dialogRef}>
                <h1>Hello</h1>
              </CustomDialog>
            
    </section>
  )
}

export default page