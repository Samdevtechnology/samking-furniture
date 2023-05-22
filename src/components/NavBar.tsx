import Link from "next/link";
import Image from "next/image";
import Container from "../utils/Container";
import SearchBar from "./SearchBar";
import IconBtnWrap from "@/utils/IconBtnWrap";
import {
  PhoneIcon,
  UserIcon,
  ShoppingBagIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import TextLinkWrap from "@/utils/TextLinkWrap";

const NavBar = () => {
  return (
    <div className="bg-primary text-white flex just-cont">
      <Container
        Variant="div"
        className="flex py-3 flex-row justify-between align-middle w-full max-w-[70rem]"
      >
        <Link href="/" title="Go Home" className="logo sm:w-[25%]">
          <Image src="/logo.svg" width={48} height={40} alt="Logo" />
        </Link>

        <SearchBar className="w-[60%]" />

        <nav className="sm:w-[35%] flex just-cont sm:ml-[5%]">
          <ul className="flex w-full flex-row align-middle justify-end sm:justify-between">
            <li className=" hidden sm:flex sm:just-cont">
              <IconBtnWrap
                bg="bg-white"
                size={12}
                className="rounded-full lg:hidden"
              >
                <PhoneIcon className="w-7 h-7 block" />
              </IconBtnWrap>
              <TextLinkWrap
                href="/contact"
                className="text-xl font-secondary hidden  lg:inline-block no-underline hover:text-xl hover:underline underline"
              >
                Contact Us
              </TextLinkWrap>
            </li>
            <li className=" hidden sm:block">
              <IconBtnWrap bg="bg-white" size={12} className="rounded-full">
                <UserIcon className="w-7 h-7" />
              </IconBtnWrap>
            </li>
            <li className=" hidden sm:block">
              <IconBtnWrap bg="bg-white" size={12} className="rounded-full">
                <ShoppingBagIcon className="w-7 h-7" />
              </IconBtnWrap>
            </li>
            <li className=" sm:hidden">
              <IconBtnWrap bg="bg-white" size={12}>
                <Bars3Icon className="w-8 h-8" />
              </IconBtnWrap>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default NavBar;
