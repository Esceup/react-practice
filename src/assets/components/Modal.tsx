import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    children: React.ReactNode;
    open: boolean;
}

export function Modal({ children, open }: ModalProps) {

    const dialog = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        if(open) {
            dialog.current?.showModal()
        } else {
            dialog.current?.close()
        }
    }, [open])

    return createPortal(
       <dialog ref={dialog}>{children}</dialog>,
       document.getElementById('modal')!
    )
 }