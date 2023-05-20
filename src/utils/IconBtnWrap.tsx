import { ReactNode } from "react";
type props = {
  children: ReactNode;
  className?: string;
  bg: string;
  size: number;
};

const IconBtnWrap = ({ children, className, bg, size }: props) => {
  return (
    <button
      className={`w-${size} h-${size} rounded-full flex just-cont hover:${bg}/10 active:${bg}/30 overflow-hidden ${className}`}
    >
      {children}
    </button>
  );
};

export default IconBtnWrap;
