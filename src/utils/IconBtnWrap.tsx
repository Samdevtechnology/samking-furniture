import Link from "next/link";
import { ReactNode } from "react";

type props = {
  children: ReactNode;
  className?: string;
  bg: string;
  size: number;
  onClick?: React.MouseEventHandler;
  href?: string;
};

const IconBtnWrap = ({
  children,
  className,
  bg,
  size,
  onClick,
  href,
}: props) => {
  if (href) {
    return (
      <Link
        href={href}
        className={`w-${size} h-${size} flex just-cont hover:${bg}/10 active:${bg}/30 overflow-hidden ${
          className ? className : ""
        }`}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`w-${size} h-${size} flex just-cont hover:${bg}/10 active:${bg}/30 overflow-hidden ${
        className ? className : ""
      }`}
    >
      {children}
    </button>
  );
};

export default IconBtnWrap;
