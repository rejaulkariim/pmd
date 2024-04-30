import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { Button } from "antd";

export default function Home() {
  return (
    <div>
      <MaxWidthWrapper>
        <h1>Hello</h1>
        <Button type="primary">Button</Button>
      </MaxWidthWrapper>
    </div>
  );
}
