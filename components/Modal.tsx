import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog";

  import React, { useImperativeHandle, useRef ,forwardRef} from 'react'
import CreatePostComponent from "./CreatePostComponent";

  interface CustomDialogProps {
    children: React.ReactNode;
  }
  
  export interface DialogHandle {
    open: () => void;
    close: () => void;
  }
  
  const CustomDialog = forwardRef<DialogHandle, CustomDialogProps>((props, ref) => {
    const triggerRef = useRef<HTMLButtonElement>(null);
  
    useImperativeHandle(ref, () => ({
      open: () => {
        if (triggerRef.current) {
          triggerRef.current.click();
        }
      },
      close: () => {
        if (triggerRef.current) {
          triggerRef.current.click();
        }
      },
    }));
  
    return (
      <Dialog >
        <DialogTrigger asChild>
          <button ref={triggerRef} style={{ display: 'none' }}>Trigger</button>
        </DialogTrigger>
        <DialogContent className="w-[80vw]">
          {props.children}
        </DialogContent>
      </Dialog>
    );
  });
  
  export default CustomDialog;