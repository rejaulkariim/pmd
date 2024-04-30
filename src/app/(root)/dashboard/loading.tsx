import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { Skeleton } from "antd";

const Loading = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <h1>All Projects</h1>
        <Skeleton paragraph={{ rows: 2 }} />
      </MaxWidthWrapper>
    </section>
  );
};

export default Loading;
