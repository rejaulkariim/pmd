"use client";

import { Button } from "antd";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button type="default" onClick={() => router.back()}>
      Back
    </Button>
  );
};

export default BackButton;
