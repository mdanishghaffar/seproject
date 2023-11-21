"use client";

import { 
    Dialog,
    DialogContent, 
    DialogHeader, 
    DialogTitle, 
    DialogDescription 
} from "./dialog"; 

import { describe } from "node:test";
import { title } from "process";

interface ModalProps{
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;

};

export const Modal: React.FC<ModalProps> = ({
    title,
    description,
    isOpen,
    onClose,
    children
}) =>{
    const onChange = (open: boolean) => {
        if(!open){
            onClose();
        }
    };
    return(
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )

}