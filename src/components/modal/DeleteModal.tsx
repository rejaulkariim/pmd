"use client";

import { Button, Modal } from "antd";
import { useState } from "react";

const DeleteModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
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
      >
        <p className="text-foreground">
          Once you delete a project this action can not be undone!
        </p>
      </Modal>
    </>
  );
};

export default DeleteModal;
