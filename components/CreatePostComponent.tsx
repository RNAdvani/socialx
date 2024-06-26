"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import PreviewComponent from './PreviewComponent'
import CustomDialog, { DialogHandle } from './Modal'
import AIAssistantComponent from './AIAssistantComponent'
import FacebookPostComponent from './FacebookPostComponent'

const CreatePostComponent = ({preview}:{preview?:React.ReactNode}) => {
    const [text, setText] = useState("")
    const fileInputRef = useRef<HTMLInputElement | null>(null)

    const dialogRef = useRef<DialogHandle>(null);

    const handleOpenDialog = () => {
      if (dialogRef.current) {
        dialogRef.current.open();
      }
    }



    const handleOpen = ()=>{
        fileInputRef.current?.click()
    }

    const [images, setImages] = useState<File[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files;
        if (!selectedFiles) return;
      
        const newImages: File[] = [];
        for (let i = 0; i < selectedFiles.length; i++) {
          const file = selectedFiles[i];
    
          if (!/\.(jpg|jpeg|png)$/.test(file.name)) {
            console.error('Invalid file type. Only jpg, jpeg, and png allowed.');
            continue;
          }
          newImages.push(file);
        }
      
        setImages((prevImages) => [...prevImages, ...newImages]);
        console.log(images)
      };

      const handleRemoveImage = (index: number) => {
        setImages((prevImages) => [...prevImages.slice(0, index), ...prevImages.slice(index + 1)]);
      };

  return (
    <div className='w-full'>
        <div className='flex w-full gap-4 rounded-xl bg-[#FCFCFC] px-4 py-6 '>
        <div className='flex flex-col border-[1px] border-[#BCBCBC6E] w-[50rem] pb-4 rounded-xl'>
            <div className="flex gap-3 p-4 py-4">
                <div className='flex justify-center items-center'>
                    <Image height={32} className='rounded-full' width={32} alt='north face logo' src={"/northface.png"} />
                </div>
                <div className="flex flex-col w-full leading-3 justify-center">
                    <h1 className='font-semibold text-[14px]'>NorthFace</h1>
                    <p className='font-normal text-[9px]'>@northface_12</p>
                </div>
                <div className='flex justify-center items-center rounded-full border-2 border-white'>
                    <Image height={32} className='rounded-full border-2 ' width={32} alt='north face logo' src={"/icons/x.svg"} />
                </div>
            </div>
            <div className='px-4 flex flex-col gap-2'>
                <div className="grid w-full gap-1.5 py-2 relative">
                    <Textarea placeholder="Write Something." onChange={(e)=>setText(e.target.value)}  maxLength={300} className='h-[15rem] rounded-b-none px-6 resize-none pt-6' id="message" />
                    <p className='font-medium text-[10px] absolute top-[0.8rem] right-[1.6rem] flex items-center text-center gap-1'>{300 - text.length} remaining <svg width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.1" d="M21 10.5C21 16.299 16.299 21 10.5 21C4.70101 21 0 16.299 0 10.5C0 4.70101 4.70101 0 10.5 0C16.299 0 21 4.70101 21 10.5ZM3.32641 10.5C3.32641 14.4619 6.53814 17.6736 10.5 17.6736C14.4619 17.6736 17.6736 14.4619 17.6736 10.5C17.6736 6.53814 14.4619 3.32641 10.5 3.32641C6.53814 3.32641 3.32641 6.53814 3.32641 10.5Z" fill="#5E17EB"/>
                        <path d="M10.5 0C12.7966 2.73863e-08 15.0298 0.752942 16.8575 2.14347C18.6853 3.53399 20.0067 5.48541 20.6194 7.69873L17.4136 8.58618C16.995 7.07403 16.0922 5.74083 14.8435 4.79082C13.5948 3.84082 12.069 3.32641 10.5 3.32641V0Z" fill="#5E17EB"/>
                        </svg>
                    </p>
                    <div className={`absolute p-2 bottom-2 flex gap-2 flex-wrap overflow-y-scroll  h-[4rem] ${images.length > 8 ? "":"no-scrollbar"}`}>
                    {images.map((image, index) => (
          <div key={index} className="w-[3rem]  h-[3rem] relative border-2 flex items-center rounded-xl">
            <img src={URL.createObjectURL(image)} className='' alt={`Preview ${index + 1}`} />
            <button className="absolute text-[12px] top-[-.5rem] right-[-0.2rem] bg-[#e5f2ff] w-[1rem] rounded-full" onClick={() => handleRemoveImage(index)}>
              x
            </button>
          </div>
        ))}
                     {
                images.length > 0 && (<button className='rounded-lg border-[#00000026] border w-[3rem] justify-center flex items-center' onClick={handleOpen}>
                <Image src={"/icons/addimage.svg"} width={25} height={25}  alt='addimage' />
            </button>)
            }
                    </div>
                </div>
                <div className='px-4 flex justify-between border-t-0 rounded-t-none  mt-0 rounded-xl border-[1px]'>
                    <div className='flex gap-4 px-2'>
                        <button onClick={handleOpen}>
                            <Image src={"/icons/gallery.svg"} width={14} height={14} alt='gallery' />
                        </button>
                        <input type="file" onChange={handleFileChange} multiple ref={fileInputRef!} className='hidden' />
                        <button>
                            <Image src={"/icons/emoji.svg"} width={14} height={14} alt='gallery' />
                        </button>
                        <button>
                            <Image src={"/icons/gif.svg"} width={14} height={14} alt='gallery' />
                            </button>
                        <button>
                            <Image src={"/icons/hashtag.svg"} width={14} height={14} alt='gallery' />
                        </button>
                        <button>
                            <Image src={"/icons/location.svg"} width={14} height={14} alt='gallery' />
                        </button>
                    </div>
                    <div className='flex gap-2'>
                        <button onClick={handleOpenDialog} className='button-gradient text-[12px] font-medium items-center gap-1 text-white flex p-2 rounded-3xl px-4'>
                            <svg width="19" height="18" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2923 8.7569C10.4572 8.26195 11.1562 8.26195 11.3211 8.7569L12.2885 11.6621C12.5015 12.3007 12.8602 12.881 13.3364 13.3569C13.8125 13.8328 14.393 14.1912 15.0317 14.4038L17.9354 15.3712C18.4304 15.5362 18.4304 16.2351 17.9354 16.4001L15.0302 17.3675C14.3916 17.5804 13.8113 17.9392 13.3355 18.4153C12.8596 18.8915 12.5011 19.4719 12.2885 20.1107L11.3211 23.0144C11.2856 23.1227 11.2167 23.2171 11.1243 23.284C11.0319 23.351 10.9208 23.387 10.8067 23.387C10.6926 23.387 10.5815 23.351 10.4891 23.284C10.3967 23.2171 10.3278 23.1227 10.2923 23.0144L9.32485 20.1092C9.11207 19.4707 8.75354 18.8906 8.27766 18.4147C7.80178 17.9388 7.22162 17.5803 6.58315 17.3675L3.67796 16.4001C3.56958 16.3645 3.4752 16.2956 3.40829 16.2032C3.34138 16.1109 3.30535 15.9997 3.30535 15.8856C3.30535 15.7716 3.34138 15.6604 3.40829 15.568C3.4752 15.4756 3.56958 15.4068 3.67796 15.3712L6.58315 14.4038C7.22162 14.191 7.80178 13.8325 8.27766 13.3566C8.75354 12.8807 9.11207 12.3006 9.32485 11.6621L10.2923 8.7569ZM4.49837 1.10922C4.51988 1.04427 4.56131 0.987745 4.61677 0.947684C4.67224 0.907624 4.73892 0.886061 4.80734 0.886061C4.87576 0.886061 4.94244 0.907624 4.9979 0.947684C5.05337 0.987745 5.0948 1.04427 5.1163 1.10922L5.69674 2.85203C5.95621 3.62895 6.56515 4.23788 7.34207 4.49735L9.08488 5.07779C9.14983 5.0993 9.20635 5.14073 9.24641 5.1962C9.28647 5.25166 9.30804 5.31834 9.30804 5.38676C9.30804 5.45518 9.28647 5.52186 9.24641 5.57732C9.20635 5.63279 9.14983 5.67422 9.08488 5.69573L7.34207 6.27616C6.9589 6.40382 6.61072 6.61897 6.32514 6.90456C6.03955 7.19014 5.8244 7.53832 5.69674 7.92149L5.1163 9.6643C5.0948 9.72925 5.05337 9.78577 4.9979 9.82583C4.94244 9.8659 4.87576 9.88746 4.80734 9.88746C4.73892 9.88746 4.67224 9.8659 4.61677 9.82583C4.56131 9.78577 4.51988 9.72925 4.49837 9.6643L3.91793 7.92149C3.79027 7.53832 3.57512 7.19014 3.28954 6.90456C3.00395 6.61897 2.65578 6.40382 2.27261 6.27616L0.529797 5.69573C0.464846 5.67422 0.408324 5.63279 0.368264 5.57732C0.328203 5.52186 0.306641 5.45518 0.306641 5.38676C0.306641 5.31834 0.328203 5.25166 0.368264 5.1962C0.408324 5.14073 0.464846 5.0993 0.529797 5.07779L2.27261 4.49735C2.65578 4.36969 3.00395 4.15455 3.28954 3.86896C3.57512 3.58338 3.79027 3.2352 3.91793 2.85203L4.49837 1.10922Z" fill="white"/>
                            </svg>
                             AI Assist
                        </button>
                        <button className='text-[12px] font-medium text-black bg-white border-[1px] border-black items-center gap-1 flex p-2 rounded-2xl px-4'>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 2.268V10C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13H2.268C2.44353 13.304 2.696 13.5565 3.00003 13.732C3.30406 13.9076 3.64894 14 4 14H10C11.0609 14 12.0783 13.5786 12.8284 12.8284C13.5786 12.0783 14 11.0609 14 10V4C14 3.64894 13.9076 3.30406 13.732 3.00003C13.5565 2.696 13.304 2.44353 13 2.268ZM8.5 6.5C8.63261 6.5 8.75979 6.44732 8.85355 6.35355C8.94732 6.25979 9 6.13261 9 6C9 5.86739 8.94732 5.74021 8.85355 5.64645C8.75979 5.55268 8.63261 5.5 8.5 5.5H6.5V3.5C6.5 3.36739 6.44732 3.24021 6.35355 3.14645C6.25979 3.05268 6.13261 3 6 3C5.86739 3 5.74021 3.05268 5.64645 3.14645C5.55268 3.24021 5.5 3.36739 5.5 3.5V5.5H3.5C3.36739 5.5 3.24021 5.55268 3.14645 5.64645C3.05268 5.74021 3 5.86739 3 6C3 6.13261 3.05268 6.25979 3.14645 6.35355C3.24021 6.44732 3.36739 6.5 3.5 6.5H5.5V8.5C5.5 8.63261 5.55268 8.75979 5.64645 8.85355C5.74021 8.94732 5.86739 9 6 9C6.13261 9 6.25979 8.94732 6.35355 8.85355C6.44732 8.75979 6.5 8.63261 6.5 8.5V6.5H8.5ZM10 0C10.5304 0 11.0391 0.210714 11.4142 0.585786C11.7893 0.960859 12 1.46957 12 2V10C12 10.5304 11.7893 11.0391 11.4142 11.4142C11.0391 11.7893 10.5304 12 10 12H2C1.46957 12 0.960859 11.7893 0.585786 11.4142C0.210714 11.0391 0 10.5304 0 10V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H10ZM11 2C11 1.73478 10.8946 1.48043 10.7071 1.29289C10.5196 1.10536 10.2652 1 10 1H2C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V10C1 10.2652 1.10536 10.5196 1.29289 10.7071C1.48043 10.8946 1.73478 11 2 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V2Z" fill="black"/>
                            </svg>
                            Start Thread
                        </button>
                    </div>
                </div>
                <div className="flex w-full border-[1px] justify-between rounded-lg px-4 py-2 border-[#455FD9]">
                    <p className='text-[#455FD9] flex items-center gap-2'>
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.50063 14C3.83759 14 3.20171 13.7366 2.73286 13.2678C2.26402 12.7989 2.00063 12.163 2.00063 11.5V7.5C2.00063 7.36739 2.05331 7.24021 2.14708 7.14645C2.24085 7.05268 2.36802 7 2.50063 7C2.63324 7 2.76042 7.05268 2.85418 7.14645C2.94795 7.24021 3.00063 7.36739 3.00063 7.5V11.5C3.00063 11.8978 3.15867 12.2794 3.43997 12.5607C3.72128 12.842 4.10281 13 4.50063 13H13.5006C13.8985 13 14.28 12.842 14.5613 12.5607C14.8426 12.2794 15.0006 11.8978 15.0006 11.5V4H5.49163C5.49163 3.642 5.36463 3.284 5.10963 3H15.0006V2.5C15.0006 2.10218 14.8426 1.72064 14.5613 1.43934C14.28 1.15804 13.8985 1 13.5006 1H4.50063C4.10281 1 3.72128 1.15804 3.43997 1.43934C3.15867 1.72064 3.00063 2.10218 3.00063 2.5V4.293L3.64663 3.646C3.69312 3.59951 3.74831 3.56264 3.80905 3.53748C3.86979 3.51232 3.93489 3.49937 4.00063 3.49937C4.06638 3.49937 4.13148 3.51232 4.19222 3.53748C4.25295 3.56264 4.30814 3.59951 4.35463 3.646C4.40112 3.69249 4.438 3.74768 4.46316 3.80842C4.48831 3.86916 4.50126 3.93426 4.50126 4C4.50126 4.06574 4.48831 4.13084 4.46316 4.19158C4.438 4.25232 4.40112 4.30751 4.35463 4.354L2.85463 5.854C2.80819 5.90056 2.75301 5.93751 2.69227 5.96271C2.63152 5.98792 2.5664 6.00089 2.50063 6.00089C2.43486 6.00089 2.36974 5.98792 2.309 5.96271C2.24825 5.93751 2.19308 5.90056 2.14663 5.854L0.646632 4.354C0.600144 4.30751 0.563267 4.25232 0.538108 4.19158C0.512949 4.13084 0.5 4.06574 0.5 4C0.5 3.93426 0.512949 3.86916 0.538108 3.80842C0.563267 3.74768 0.600144 3.69249 0.646632 3.646C0.69312 3.59951 0.748309 3.56264 0.809048 3.53748C0.869788 3.51232 0.934888 3.49937 1.00063 3.49937C1.06638 3.49937 1.13148 3.51232 1.19221 3.53748C1.25295 3.56264 1.30814 3.59951 1.35463 3.646L2.00063 4.293V2.5C2.00063 1.83696 2.26402 1.20107 2.73286 0.732233C3.20171 0.263392 3.83759 0 4.50063 0H13.5006C14.1637 0 14.7996 0.263392 15.2684 0.732233C15.7372 1.20107 16.0006 1.83696 16.0006 2.5V11.5C16.0006 12.163 15.7372 12.7989 15.2684 13.2678C14.7996 13.7366 14.1637 14 13.5006 14H4.50063ZM7.00063 7C7.00063 7.26522 6.89527 7.51957 6.70774 7.70711C6.5202 7.89464 6.26585 8 6.00063 8C5.73541 8 5.48106 7.89464 5.29352 7.70711C5.10599 7.51957 5.00063 7.26522 5.00063 7C5.00063 6.73478 5.10599 6.48043 5.29352 6.29289C5.48106 6.10536 5.73541 6 6.00063 6C6.26585 6 6.5202 6.10536 6.70774 6.29289C6.89527 6.48043 7.00063 6.73478 7.00063 7ZM6.00063 11C6.26585 11 6.5202 10.8946 6.70774 10.7071C6.89527 10.5196 7.00063 10.2652 7.00063 10C7.00063 9.73478 6.89527 9.48043 6.70774 9.29289C6.5202 9.10536 6.26585 9 6.00063 9C5.73541 9 5.48106 9.10536 5.29352 9.29289C5.10599 9.48043 5.00063 9.73478 5.00063 10C5.00063 10.2652 5.10599 10.5196 5.29352 10.7071C5.48106 10.8946 5.73541 11 6.00063 11ZM10.0006 7C10.0006 7.26522 9.89527 7.51957 9.70774 7.70711C9.5202 7.89464 9.26585 8 9.00063 8C8.73541 8 8.48106 7.89464 8.29352 7.70711C8.10599 7.51957 8.00063 7.26522 8.00063 7C8.00063 6.73478 8.10599 6.48043 8.29352 6.29289C8.48106 6.10536 8.73541 6 9.00063 6C9.26585 6 9.5202 6.10536 9.70774 6.29289C9.89527 6.48043 10.0006 6.73478 10.0006 7ZM9.00063 11C9.26585 11 9.5202 10.8946 9.70774 10.7071C9.89527 10.5196 10.0006 10.2652 10.0006 10C10.0006 9.73478 9.89527 9.48043 9.70774 9.29289C9.5202 9.10536 9.26585 9 9.00063 9C8.73541 9 8.48106 9.10536 8.29352 9.29289C8.10599 9.48043 8.00063 9.73478 8.00063 10C8.00063 10.2652 8.10599 10.5196 8.29352 10.7071C8.48106 10.8946 8.73541 11 9.00063 11ZM13.0006 7C13.0006 7.26522 12.8953 7.51957 12.7077 7.70711C12.5202 7.89464 12.2658 8 12.0006 8C11.7354 8 11.4811 7.89464 11.2935 7.70711C11.106 7.51957 11.0006 7.26522 11.0006 7C11.0006 6.73478 11.106 6.48043 11.2935 6.29289C11.4811 6.10536 11.7354 6 12.0006 6C12.2658 6 12.5202 6.10536 12.7077 6.29289C12.8953 6.48043 13.0006 6.73478 13.0006 7Z" fill="#455FD9"/>
                        </svg>
                        Schedule date: May 20, 3:35 PM
                    </p>
                    <button className='text-[#5E17EB] text-[12px] font-medium flex items-center gap-2'>
                        <Image src={"/icons/editpurpleicon.svg"} height={12} width={12} alt='editpur' />
                        Edit
                    </button>
                </div>
            </div>
        </div>
        <div className='bg-[#F3F3F3] px-4 flex flex-col justify-center w-[20rem] rounded-xl'>
            <h2 className='tracking-[4px] text-[9px] font-medium uppercase'>Preview</h2>
            <FacebookPostComponent images={images} text={text} />
        </div>
        
    </div>
        <div className='w-full flex justify-between p-4'>
            <div>
                <button className='text-[12px] font-medium text-black bg-white border-[1px] border-black items-center gap-1 flex p-2 rounded-2xl px-4'>
                    Save as Draft
                </button>
            </div>
            <div className='flex gap-4'>
                <button className='text-[12px] font-medium text-black bg-white border-[1px] border-black items-center gap-1 flex p-2 rounded-2xl px-4'>
                    Start Thread
                </button>
                <button className='button-gradient text-[12px] font-medium items-center gap-1 text-white flex p-2 rounded-3xl px-4'>
                   Schedule Post
                </button>
            </div>
        </div>
        <CustomDialog  ref={dialogRef}>
            <AIAssistantComponent />
        </CustomDialog>
    </div>
  )
}

export default CreatePostComponent