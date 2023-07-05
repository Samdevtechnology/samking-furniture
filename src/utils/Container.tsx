import { ReactNode, ElementType } from "react";
type props = {
  children: ReactNode;
  className?: string;
  Variant?: ElementType;
};

const Container = ({ children, className, Variant = "div" }: props) => {
  return (
    <Variant
      className={`px-4 md:px-8 lg:px-12 max-w-[90rem] mx-auto ${className}`}
    >
      {children}
    </Variant>
  );
};

export default Container;
