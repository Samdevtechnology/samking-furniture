import Link from "next/link";
import { Button } from "@/utils/MuiServerComponent";
import CUSTOM_BTN_CONFIG from "@/utils/BUTTON_CONFIG";

interface props {
  children: React.ReactNode;
  title: string;
  link?: string;
  href?: string;
}

const MainLayout = ({ children, title, href, link }: props) => {
  return (
    <div className="shadow h-full">
      <header className="bg-secondary rounded-t py-3 px-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-wider">{title}</h1>
        {link && href && (
          <Link href={href}>
            <Button className={`w-full ${CUSTOM_BTN_CONFIG()}`}>{link}</Button>
          </Link>
        )}
      </header>

      <div id="body">{children}</div>
    </div>
  );
};

export default MainLayout;
