"use client";

import {
  Button,
  DatePicker,
  DatePickerProps,
  FormProps,
  Modal,
  Select,
} from "antd";
import { useState } from "react";

import { useTaskStore } from "@/lib/store";
import { Form, Input } from "antd";
type FieldType = {
  title: string;
  description: string;
  deadlines: Date;
  teamMember: string;
};

const AddTaskModal = () => {
  const addTask = useTaskStore((state) => state.addTask);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log(values);
    const { title, description, deadlines, teamMember } = values;
    addTask(title, description, deadlines, teamMember);
  };

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
      <Button
        onClick={showModal}
        style={{
          backgroundColor: "transparent",
          borderColor: "#191918",
          color: "#b5b3ad",
        }}
      >
        New Task
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        title="Add new task"
        style={{
          backgroundColor: "#111110",
          borderColor: "#191918",
          color: "#b5b3ad",
        }}
      >
        <p className="text-foreground">What do you want to get done today?</p>

        <Form onFinish={onFinish} autoComplete="off" layout="vertical">
          <Form.Item<FieldType>
            label={<span style={{ color: "#b5b3ad" }}>Title</span>}
            name="title"
            rules={[{ required: true, message: "Please input your title!" }]}
          >
            <Input
              style={{
                backgroundColor: "#111110",
                borderColor: "#191918",
                color: "#b5b3ad",
              }}
            />
          </Form.Item>

          <Form.Item<FieldType>
            label={<span style={{ color: "#b5b3ad" }}>Description</span>}
            name="description"
            rules={[
              { required: true, message: "Please input your description!" },
            ]}
          >
            <Input.TextArea
              style={{
                backgroundColor: "#111110",
                borderColor: "#191918",
                color: "#b5b3ad",
              }}
            />
          </Form.Item>
          <Form.Item<FieldType>
            label={<span style={{ color: "#b5b3ad" }}>Deadlines</span>}
            name="deadlines"
            rules={[
              { required: true, message: "Please input your deadlines!" },
            ]}
          >
            <DatePicker onChange={onChange} />
          </Form.Item>

          <Form.Item<FieldType>
            label={<span style={{ color: "#b5b3ad" }}>Assign Member</span>}
            name="teamMember"
            rules={[
              { required: true, message: "Please input your deadlines!" },
            ]}
          >
            <Select
              defaultValue="Rejaul"
              options={[
                { value: "rejaul", label: "Rejaul" },
                { value: "mir hossain", label: "Mir Hossain" },
              ]}
            />
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              style={{
                backgroundColor: "#111110",
                borderColor: "#191918",
                color: "#b5b3ad",
              }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddTaskModal;
