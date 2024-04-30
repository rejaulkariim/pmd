import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(`w-full max-w-screen-xl mx-auto px-4 md:px-20`, className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
