"use client";

import { useTaskStore } from "@/lib/store";
import { Button, Modal } from "antd";
import { useState } from "react";

const DeleteModal = ({ id }: { id: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const removeTask = useTaskStore((state) => state.removeTask);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    removeTask(id);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="default" onClick={showModal}>
        Delete
      </Button>
      <Modal
        title="Are you sure you want to delete?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        styles={{
          content: { backgroundColor: "#0E0E0C", border: "#b5b3ad" },
          header: {
            backgroundColor: "#0E0E0C",
            color: "red",
          },
          body: { color: "white" },
          mask: { backgroundClip: "#0E0E0C" },
        }}
      >
        <p className="text-foreground">
          Once you delete a project this action can not be undone!
        </p>
      </Modal>
    </>
  );
};

export default DeleteModal;
