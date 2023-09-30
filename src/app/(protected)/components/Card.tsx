import Link from "next/link";
import React from "react";

interface CardProps {
  children: React.ReactNode;
}

interface HeaderProps {
  children: string;
  icon?: React.ReactNode;
}

interface FooterProps {
  children: string;
  href: string;
}

interface ContentProps {
  title?: string;
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <div className="Card shadow flex flex-col">{children}</div>;
};

export const Header = ({ children, icon }: HeaderProps) => {
  return (
    <header>
      <div className="bg-secondary flex rounded-t py-3 px-4 justify-between">
        <h4>{children}</h4>
        {icon && <span>{icon}</span>}
      </div>
    </header>
  );
};

export const Content = ({ title, children }: ContentProps) => {
  return (
    <div className="Card-body h-full">
      <div className="px-4 py-2 flex flex-col gap-y-1">
        {title && (
          <h6 className=" font-medium text-lg tracking-wide">{title}</h6>
        )}
        <span className="text-sm text-black/60 leading-6">{children}</span>
      </div>
    </div>
  );
};

export const Footer = ({ children, href }: FooterProps) => {
  return (
    <div className="Card-tail px-4 py-2 border-t border-[#707070]/20">
      <Link href={href}>
        <h4 className="font-semibold text-lg text-primary">{children}</h4>
      </Link>
    </div>
  );
};

export default Card;
