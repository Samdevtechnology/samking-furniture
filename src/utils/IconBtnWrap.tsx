import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "@/utils/MuiServerComponent";

type props = {
  children: ReactNode;
  className?: string;
  bg: string;
  size: number;
  onClick?: React.MouseEventHandler;
  href?: string;
  as?: "span" | "div";
};

const IconBtnWrap = ({
  children,
  className,
  bg,
  size,
  onClick,
  href,
  as,
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
  const Component = as || "button";
  return (
    <Component
      type="button"
      onClick={onClick}
      className={`w-${size} h-${size} flex just-cont hover:${bg}/10 active:${bg}/30 overflow-hidden ${
        className ? className : ""
      }`}
    >
      {children}
    </Component>
  );
};

export default IconBtnWrap;
