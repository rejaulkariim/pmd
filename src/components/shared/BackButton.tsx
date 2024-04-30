"use client";

import { Button } from "antd";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      style={{
        backgroundColor: "#111110",
        borderColor: "#191918",
        color: "#b5b3ad",
      }}
    >
      Back
    </Button>
  );
};

export default BackButton;
