"use client";
import { Button }  from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";
import { Modal } from "@/components/ui/modal"

const SetUpPage = () => {
    return (
      <div className="p-4">
        <Modal title="Test" description="Test Desc" isOpen onClose={()=> {}}>Children</Modal>
        </div>
      
    )
}

export default SetUpPage;
  