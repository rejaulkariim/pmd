"use client";

import BackButton from "@/components/shared/BackButton";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input, notification } from "antd";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (values.email === "pmd@gmail.com" && values.password === "pmd123") {
      notification.success({
        message: "Login Successful",
        description: "Welcome back!",
      });
      router.push("/dashboard");
    } else {
      notification.error({
        message: "Login Failed",
        description: "Invalid email or password",
      });
    }
  };

  return (
    <div className="max-w-lg mx-auto space-y-3">
      <BackButton />
      <div className="mt-10">
        <h1 className="font-bold text-white">Login</h1>
        <p className="text-gray-400">Please login to your account</p>
      </div>
      <Form onFinish={onFinish} autoComplete="off" layout="vertical">
        <Form.Item<FieldType>
          label={<span style={{ color: "white" }}>Email</span>}
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input className="bg-black bg-opacity-25 text-white" />
        </Form.Item>

        <Form.Item<FieldType>
          label={<span style={{ color: "white" }}>Password</span>}
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password className="bg-rose-500" />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked">
          <Checkbox style={{ color: "white" }}>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
