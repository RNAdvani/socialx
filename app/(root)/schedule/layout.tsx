import ChannelComponent from "@/components/ChannelComponent";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function ScheduleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen  flex w-full  no-scrollbar">
        <aside className='sticky bg-[#F2F2F2] left-0 top-0 w-[20rem] h-full no-scrollbar'>
            <div className='h-[200vh]  px-1 py-4 no-scrollbar'>
              <h3 className="font-semibold text-[15px]">
                Channels
              </h3>
              <p className="text-[#120F1A] text-[10px] font-normal">
                3 Connected
              </p>
              <div className="flex flex-col gap-3  no-scrollbar px-2 py-4 ">
                <ChannelComponent id='1' type="instagram" />
                <ChannelComponent id='2' type="linkedin" />
                <ChannelComponent id='3' type="facebook" />
                <ChannelComponent id='4' type="instagram" />
                <ChannelComponent id='5' type="instagram" />
              </div>
            </div>
        </aside>
        <main className='flex w-full h-full  overflow-y-scrol no-scrollbarf'>
            {children}
        </main>
    </div>
  );
}
