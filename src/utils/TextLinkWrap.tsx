import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

type props = {
  children: ReactNode;
  className?: string;
  title?: string;
  href: string;
  scale?: boolean;
  pop?: boolean;
};

const TextLinkWrap = ({
  children,
  className,
  href,
  scale = true,
  title,
  pop,
}: props) => {
  return (
    <Link
      title={title}
      target={pop ? "_blank" : "_self"}
      href={href}
      className={clsx(
        `w-max inline-block transition-all h-7 underline decoration-[0.5px] hover:decoration-1 underline-offset-4 ${
          className ? className : ""
        }`,
        {
          "hover:text-base": scale === true,
        }
      )}
    >
      {children}
    </Link>
  );
};

export default TextLinkWrap;
