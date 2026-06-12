import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface IMaxWidthWrapper {
  className?: string;
  children: ReactNode;
}
const MaxWidthWrapper = ({ className, children }: IMaxWidthWrapper) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
