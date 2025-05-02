"use client";

import { Dialog, DialogPanel } from '@headlessui/react'
import { ReactNode } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;    
}

export const Modal = (props: ModalProps) => {
    const {
        isOpen,
        onClose,
        children,
    } = props

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="max-w-[700px] max-h-[500px] space-y-4 shadow-lg bg-white rounded-btn p-8">
                    {children}
                </DialogPanel>
            </div>
        </Dialog>
    );
};