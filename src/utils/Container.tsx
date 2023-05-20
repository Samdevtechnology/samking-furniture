import { ReactNode, ElementType } from "react";
type props = { children: ReactNode; className?: string; Variant: ElementType };

const Container = ({ children, className, Variant }: props) => {
  return (
    <Variant className={`px-4 md:px-8 lg:px-12 max-w-[70rem] ${className}`}>
      {children}
    </Variant>
  );
};

export default Container;
