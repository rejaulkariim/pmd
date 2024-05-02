import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { Skeleton } from "antd";

const Loading = () => {
  return (
    <section className="py-10">
      <MaxWidthWrapper className="max-w-3xl mx-auto">
        <h1>All Projects</h1>
        <Skeleton paragraph={{ rows: 4 }} />
      </MaxWidthWrapper>
    </section>
  );
};

export default Loading;
