import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "../components/ui/dropdown-menu"
  import { IoIosArrowDown } from "react-icons/io";
const DropDown = ({bg}:{bg?:string}) => {
  return (
    <DropdownMenu>
  <DropdownMenuTrigger className={`bg-[${bg==="transparent"?"transparent":"#ecebeb"}] p-1 text-[#726E7A]`}><IoIosArrowDown/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

  )
}

export default DropDown