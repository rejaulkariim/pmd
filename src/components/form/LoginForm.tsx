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
      <div className="">
        <h1 className="font-bold text-white">Login</h1>
        <p className="text-foreground">Please login to your account</p>
      </div>
      <Form onFinish={onFinish} autoComplete="off" layout="vertical">
        <Form.Item<FieldType>
          label={<span style={{ color: "#b5b3ad" }}>Email</span>}
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
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
          label={<span style={{ color: "#b5b3ad" }}>Password</span>}
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            style={{
              backgroundColor: "#111110",
              borderColor: "#191918",
              color: "#b5b3ad",
            }}
          />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked">
          <Checkbox style={{ color: "#b5b3ad" }}>Remember me</Checkbox>
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

      <div>
        <h1 className="font-bold">Credentials</h1>
        <p className="text-foreground text-sm">Email: pmd@gmail.com</p>
        <p className="text-foreground text-sm">Password: pmd123</p>
      </div>
    </div>
  );
};

export default LoginForm;
