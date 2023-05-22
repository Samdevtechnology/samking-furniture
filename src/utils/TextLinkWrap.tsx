import Link from "next/link";
import { ReactNode } from "react";
type props = {
  children: ReactNode;
  className?: string;
  href: string;
  color?: string;
};

const TextLinkWrap = ({ children, className, href, color }: props) => {
  return (
    <Link
      href={href}
      className={`w-min inline-block transition-all h-7 underline decoration-[0.5px] hover:decoration-1 underline-offset-4 hover:text-base ${
        className ? className : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default TextLinkWrap;