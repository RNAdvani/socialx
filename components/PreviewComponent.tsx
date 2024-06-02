import Image from 'next/image'
import React from 'react'

const PreviewComponent = ({text}:{text:string}) => {
  return (
   <div className="flex bg-white rounded-xl w-[25rem] p-2 border-[1px] border-[#E9E9E9]">
        <div className='flex justify-center items-center'>
            <Image height={40} className='rounded-full' width={40} alt='north face logo' src={"/northface.png"} />
        </div>
         <div className='flex px-2 pt-6 flex-col gap-0'>
            <div className="flex gap-1 w-full leading-3 items-center">
                <h1 className='font-semibold text-[14px]'>NorthFace</h1>
                <p className='font-normal text-[#687684] text-[10px]'>@northface_12</p>
                <p className='font-normal text-[#687684] text-[10px]'>3h</p>
            </div>
            <div className='w-full'>
                <p>{text}</p>
            </div>
                <svg width="241" height="15" viewBox="0 0 241 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M154.619 0.698023C155.456 0.488727 156.34 0.586592 157.108 0.970403L157.424 1.12858C157.806 1.31957 158.142 1.58062 158.416 1.89358C158.455 1.93741 158.523 1.93741 158.562 1.89358C158.836 1.58062 159.172 1.31957 159.554 1.12858L159.87 0.970403C160.638 0.586592 161.522 0.488727 162.359 0.698023C163.164 0.899158 163.866 1.36893 164.353 2.01878L164.531 2.25552C165.098 3.01152 165.402 3.92659 165.402 4.86339V5.1278C165.402 5.547 165.35 5.96479 165.248 6.37193L165.186 6.61957C164.954 7.55124 164.536 8.42885 163.958 9.20046L163.597 9.68141C163.307 10.0681 162.989 10.434 162.647 10.7763L162.281 11.1421C161.403 12.0199 160.388 12.7519 159.275 13.3088C158.781 13.5554 158.197 13.5554 157.703 13.3088C156.59 12.7519 155.575 12.0199 154.697 11.1421L154.331 10.7763C153.989 10.434 153.671 10.0681 153.381 9.68141L153.02 9.20046C152.442 8.42885 152.024 7.55124 151.792 6.61957L151.73 6.37193C151.628 5.96479 151.576 5.547 151.576 5.1278V4.86339C151.576 3.92659 151.88 3.01152 152.447 2.25552L152.625 2.01878C153.112 1.36893 153.814 0.899158 154.619 0.698023ZM156.572 1.90272C156.056 1.6444 155.468 1.58073 154.912 1.71967C154.376 1.8536 153.895 2.17 153.553 2.62533L153.375 2.86207C152.945 3.43579 152.71 4.13804 152.71 4.86339V5.1278C152.71 5.4664 152.751 5.80354 152.833 6.13159L152.895 6.37923C153.096 7.18222 153.455 7.93508 153.949 8.59391L154.31 9.07486C154.569 9.42142 154.853 9.7488 155.159 10.0546L155.525 10.4204C156.32 11.2153 157.236 11.8755 158.239 12.3764C158.398 12.4559 158.581 12.4559 158.74 12.3764C159.742 11.8755 160.658 11.2153 161.453 10.4204L161.819 10.0546C162.125 9.74881 162.409 9.42142 162.668 9.07486L163.029 8.59391C163.523 7.93508 163.882 7.18222 164.083 6.37923L164.145 6.13159C164.227 5.80354 164.268 5.4664 164.268 5.1278V4.86339C164.268 4.13804 164.033 3.43579 163.603 2.86207L163.425 2.62533C163.084 2.17 162.602 1.8536 162.066 1.71967C161.51 1.58073 160.922 1.6444 160.406 1.90272L160.089 2.0609C159.68 2.26545 159.341 2.60114 159.129 3.02407C158.752 3.77942 158.224 3.77456 157.849 3.02407C157.637 2.60114 157.298 2.26545 156.889 2.0609L156.572 1.90272Z" fill="#687684"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.87275 10.0375C7.12727 10.0375 7.33359 10.2439 7.33359 10.4984V12.3029C9.86705 10.8231 11.3913 9.77633 12.3106 8.86235C12.844 8.33194 13.1375 7.87962 13.3079 7.44831C13.4793 7.01463 13.5549 6.53008 13.5549 5.88999C13.5549 3.59936 11.698 1.74243 9.40737 1.74243H6.18149C3.89086 1.74243 2.03394 3.59936 2.03394 5.88999C2.03394 8.18062 3.89086 10.0375 6.18149 10.0375H6.87275ZM7.33359 13.6347C13.4757 10.1 14.707 8.65217 14.707 5.88999C14.707 2.96307 12.3343 0.590332 9.40737 0.590332H6.18149C3.25457 0.590332 0.881836 2.96307 0.881836 5.88999C0.881836 8.81691 3.25457 11.1896 6.18149 11.1896V13.5018C6.18149 13.8543 6.56119 14.0762 6.8675 13.9016C7.02592 13.8113 7.18126 13.7224 7.33359 13.6347Z" fill="#687684"/>
<path d="M78.168 1.48398C77.9881 1.30401 77.6963 1.30401 77.5163 1.48398L75.1306 3.86964C74.9057 4.0946 74.9057 4.45934 75.1306 4.6843C75.3556 4.90926 75.7203 4.90926 75.9453 4.6843L77.2661 3.36348V10.2679C77.2661 11.8586 78.5556 13.1481 80.1464 13.1481H83.8331C84.1512 13.1481 84.4091 12.8902 84.4091 12.5721C84.4091 12.2539 84.1512 11.996 83.8331 11.996H80.1464C79.1919 11.996 78.4182 11.2223 78.4182 10.2679V3.36348L79.739 4.6843C79.964 4.90926 80.3287 4.90926 80.5537 4.6843C80.7786 4.45934 80.7786 4.0946 80.5537 3.86964L78.168 1.48398Z" fill="#687684"/>
<path d="M88.2308 13.1761C88.4108 13.356 88.7026 13.356 88.8825 13.1761L91.2682 10.7904C91.4932 10.5654 91.4932 10.2007 91.2682 9.97573C91.0432 9.75077 90.6785 9.75077 90.4536 9.97573L89.1327 11.2965V4.39214C89.1327 2.80143 87.8432 1.5119 86.2525 1.5119H82.5658C82.2476 1.5119 81.9897 1.7698 81.9897 2.08794C81.9897 2.40609 82.2476 2.66399 82.5658 2.66399H86.2525C87.2069 2.66399 87.9806 3.43771 87.9806 4.39214V11.2965L86.6598 9.97573C86.4349 9.75077 86.0701 9.75077 85.8452 9.97573C85.6202 10.2007 85.6202 10.5654 85.8452 10.7904L88.2308 13.1761Z" fill="#687684"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M232.934 0.725187C233.114 0.545218 233.406 0.545218 233.586 0.725187L236.893 4.03253C237.118 4.25749 237.118 4.62223 236.893 4.84719C236.668 5.07215 236.304 5.07215 236.079 4.84719L233.836 2.60469V9.50909C233.836 9.82724 233.578 10.0851 233.26 10.0851C232.942 10.0851 232.684 9.82724 232.684 9.50909V2.60469L230.442 4.84719C230.217 5.07215 229.852 5.07215 229.627 4.84719C229.402 4.62223 229.402 4.25749 229.627 4.03253L232.934 0.725187ZM226.808 8.01137C227.127 8.01137 227.385 8.26927 227.385 8.58742V12.2741C227.385 12.7195 227.746 13.0806 228.191 13.0806H238.329C238.775 13.0806 239.136 12.7195 239.136 12.2741V8.58742C239.136 8.26927 239.394 8.01137 239.712 8.01137C240.03 8.01137 240.288 8.26927 240.288 8.58742V12.2741C240.288 13.3558 239.411 14.2327 238.329 14.2327H228.191C227.109 14.2327 226.232 13.3558 226.232 12.2741V8.58742C226.232 8.26927 226.49 8.01137 226.808 8.01137Z" fill="#687684"/>
<path d="M22.3612 10.5902V8.97547H18.5647V8.0898C19.2776 6.82249 20.3901 5.05833 21.9022 2.79734H23.3117V8.106H24.4188V8.97547H23.3117V10.5902H22.3612ZM19.5584 8.04659V8.1114H22.3666V3.69922H22.3018C21.4594 4.92332 20.5449 6.37245 19.5584 8.04659ZM28.3979 10.7684C27.811 10.7684 27.2998 10.6172 26.8641 10.3148C26.4285 10.0088 26.0883 9.56952 25.8435 8.99707C25.5914 8.40662 25.4654 7.68296 25.4654 6.82609C25.4654 5.48677 25.7265 4.44988 26.2485 3.71542C26.7705 2.98096 27.5086 2.61372 28.4627 2.61372C29.1251 2.61372 29.685 2.79734 30.1422 3.16457C30.6031 3.5282 30.8947 4.02325 31.0171 4.6497H30.018C29.9136 4.28607 29.721 3.99984 29.4402 3.79103C29.1629 3.58221 28.8335 3.4778 28.4519 3.4778C27.8182 3.4778 27.325 3.75142 26.9722 4.29867C26.6229 4.84592 26.4357 5.63798 26.4105 6.67487H26.4969C26.6877 6.29684 26.965 6.00342 27.3286 5.7946C27.6922 5.58218 28.1063 5.47597 28.5707 5.47597C29.3124 5.47597 29.9244 5.72259 30.4069 6.21583C30.8893 6.70548 31.1305 7.32833 31.1305 8.08439C31.1305 8.86926 30.8749 9.51372 30.3636 10.0178C29.8524 10.5182 29.1971 10.7684 28.3979 10.7684ZM27.1288 9.39131C27.4672 9.74054 27.8866 9.91515 28.3871 9.91515C28.8875 9.91515 29.3052 9.74414 29.64 9.40211C29.9784 9.05648 30.1476 8.62804 30.1476 8.1168C30.1476 7.58395 29.9838 7.15191 29.6562 6.82069C29.3322 6.48586 28.9127 6.31844 28.3979 6.31844C27.883 6.31844 27.4582 6.48406 27.1234 6.81529C26.7921 7.14651 26.6265 7.56955 26.6265 8.08439C26.6265 8.60644 26.7939 9.04208 27.1288 9.39131Z" fill="#687684"/>
<path d="M96.2434 10.5902V3.87743H96.157L94.175 5.31396V4.28787L96.2488 2.79734H97.2155V10.5902H96.2434ZM103.949 10.142C103.427 10.5632 102.753 10.7738 101.929 10.7738C101.105 10.7738 100.429 10.5632 99.9038 10.142C99.3818 9.71713 99.1207 9.17169 99.1207 8.50563C99.1207 7.99799 99.2684 7.56235 99.5636 7.19872C99.8588 6.83509 100.251 6.60827 100.741 6.51826V6.43185C100.345 6.32384 100.028 6.11323 99.7904 5.8C99.5564 5.48677 99.4394 5.11774 99.4394 4.6929C99.4394 4.08445 99.6716 3.58581 100.136 3.19697C100.604 2.80814 101.202 2.61372 101.929 2.61372C102.656 2.61372 103.252 2.80814 103.717 3.19697C104.185 3.58581 104.419 4.08445 104.419 4.6929C104.419 5.12134 104.302 5.49037 104.068 5.8C103.837 6.10963 103.52 6.32024 103.117 6.43185V6.51826C103.607 6.60827 103.999 6.83509 104.294 7.19872C104.59 7.56235 104.737 7.99799 104.737 8.50563C104.737 9.17169 104.474 9.71713 103.949 10.142ZM100.611 9.52632C100.95 9.80354 101.389 9.94215 101.929 9.94215C102.469 9.94215 102.908 9.80354 103.247 9.52632C103.585 9.24549 103.754 8.88186 103.754 8.43542C103.754 7.98899 103.585 7.62716 103.247 7.34993C102.908 7.06911 102.469 6.9287 101.929 6.9287C101.389 6.9287 100.95 7.06911 100.611 7.34993C100.273 7.62716 100.104 7.98899 100.104 8.43542C100.104 8.88186 100.273 9.24549 100.611 9.52632ZM100.816 5.74599C101.097 5.98721 101.468 6.10782 101.929 6.10782C102.39 6.10782 102.761 5.98721 103.041 5.74599C103.322 5.50117 103.463 5.18075 103.463 4.78471C103.463 4.38148 103.322 4.05745 103.041 3.81263C102.761 3.56781 102.39 3.4454 101.929 3.4454C101.468 3.4454 101.097 3.56781 100.816 3.81263C100.536 4.05745 100.395 4.38148 100.395 4.78471C100.395 5.18075 100.536 5.50117 100.816 5.74599Z" fill="#687684"/>
<path d="M170.629 6.9989V6.16723H171.574C172.017 6.16723 172.379 6.03762 172.66 5.7784C172.944 5.51917 173.087 5.18795 173.087 4.78471C173.087 4.38868 172.95 4.07005 172.676 3.82883C172.403 3.58401 172.041 3.4616 171.591 3.4616C171.141 3.4616 170.777 3.58041 170.5 3.81803C170.223 4.05205 170.064 4.37788 170.025 4.79551H169.079C169.13 4.11865 169.382 3.58581 169.835 3.19697C170.289 2.80814 170.887 2.61372 171.628 2.61372C172.075 2.61372 172.485 2.70553 172.86 2.88915C173.238 3.06916 173.535 3.31579 173.751 3.62901C173.967 3.94224 174.075 4.28427 174.075 4.6551C174.075 5.11954 173.954 5.51197 173.713 5.8324C173.472 6.15283 173.137 6.36525 172.709 6.46966V6.55606C173.238 6.62447 173.654 6.83149 173.956 7.17712C174.258 7.51915 174.41 7.95658 174.41 8.48943C174.41 9.13028 174.145 9.67213 173.616 10.115C173.087 10.5542 172.437 10.7738 171.666 10.7738C170.874 10.7738 170.228 10.5722 169.727 10.169C169.227 9.76214 168.959 9.22569 168.923 8.55964H169.862C169.906 8.97367 170.089 9.3049 170.413 9.55332C170.737 9.80174 171.151 9.92595 171.655 9.92595C172.167 9.92595 172.586 9.78914 172.914 9.51552C173.245 9.24189 173.411 8.89086 173.411 8.46243C173.411 8.01239 173.25 7.65596 172.93 7.39314C172.61 7.13031 172.172 6.9989 171.618 6.9989H170.629ZM178.448 10.7684C177.861 10.7684 177.35 10.6172 176.914 10.3148C176.479 10.0088 176.139 9.56952 175.894 8.99707C175.642 8.40662 175.516 7.68296 175.516 6.82609C175.516 5.48677 175.777 4.44988 176.299 3.71542C176.821 2.98096 177.559 2.61372 178.513 2.61372C179.175 2.61372 179.735 2.79734 180.193 3.16457C180.653 3.5282 180.945 4.02325 181.067 4.6497H180.068C179.964 4.28607 179.771 3.99984 179.49 3.79103C179.213 3.58221 178.884 3.4778 178.502 3.4778C177.869 3.4778 177.375 3.75142 177.022 4.29867C176.673 4.84592 176.486 5.63798 176.461 6.67487H176.547C176.738 6.29684 177.015 6.00342 177.379 5.7946C177.742 5.58218 178.157 5.47597 178.621 5.47597C179.363 5.47597 179.975 5.72259 180.457 6.21583C180.94 6.70548 181.181 7.32833 181.181 8.08439C181.181 8.86926 180.925 9.51372 180.414 10.0178C179.903 10.5182 179.247 10.7684 178.448 10.7684ZM177.179 9.39131C177.517 9.74054 177.937 9.91515 178.437 9.91515C178.938 9.91515 179.355 9.74414 179.69 9.40211C180.029 9.05648 180.198 8.62804 180.198 8.1168C180.198 7.58395 180.034 7.15191 179.706 6.82069C179.382 6.48586 178.963 6.31844 178.448 6.31844C177.933 6.31844 177.508 6.48406 177.174 6.81529C176.842 7.14651 176.677 7.56955 176.677 8.08439C176.677 8.60644 176.844 9.04208 177.179 9.39131ZM184.064 6.9989V6.16723H185.009C185.451 6.16723 185.813 6.03762 186.094 5.7784C186.379 5.51917 186.521 5.18795 186.521 4.78471C186.521 4.38868 186.384 4.07005 186.11 3.82883C185.837 3.58401 185.475 3.4616 185.025 3.4616C184.575 3.4616 184.211 3.58041 183.934 3.81803C183.657 4.05205 183.498 4.37788 183.459 4.79551H182.514C182.564 4.11865 182.816 3.58581 183.27 3.19697C183.723 2.80814 184.321 2.61372 185.063 2.61372C185.509 2.61372 185.92 2.70553 186.294 2.88915C186.672 3.06916 186.969 3.31579 187.185 3.62901C187.401 3.94224 187.509 4.28427 187.509 4.6551C187.509 5.11954 187.388 5.51197 187.147 5.8324C186.906 6.15283 186.571 6.36525 186.143 6.46966V6.55606C186.672 6.62447 187.088 6.83149 187.39 7.17712C187.693 7.51915 187.844 7.95658 187.844 8.48943C187.844 9.13028 187.579 9.67213 187.05 10.115C186.521 10.5542 185.871 10.7738 185.1 10.7738C184.308 10.7738 183.662 10.5722 183.162 10.169C182.661 9.76214 182.393 9.22569 182.357 8.55964H183.297C183.34 8.97367 183.524 9.3049 183.848 9.55332C184.172 9.80174 184.586 9.92595 185.09 9.92595C185.601 9.92595 186.02 9.78914 186.348 9.51552C186.679 9.24189 186.845 8.89086 186.845 8.46243C186.845 8.01239 186.685 7.65596 186.364 7.39314C186.044 7.13031 185.606 6.9989 185.052 6.9989H184.064Z" fill="#687684"/>
</svg>

        </div>
        
   </div>
  )
}

export default PreviewComponent