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

const NavBar = () => {
  return (
    <div className="bg-primary text-white flex just-cont">
      <Container
        Variant="div"
        className="flex py-3 flex-row justify-between align-middle w-full max-w-[70rem]"
      >
        <Link href="/" className="logo sm:w-[25%]">
          <Image src="/logo.svg" width={48} height={40} alt="Logo" />
        </Link>

        <SearchBar className="w-[60%]" />

        <nav className="sm:w-[35%] flex just-cont sm:ml-[5%]">
          <ul className="flex w-full flex-row align-middle justify-end sm:justify-between">
            <li className=" hidden sm:flex sm:justify-center sm:align-middle">
              <IconBtnWrap bg="bg-white" size={12}>
                <PhoneIcon className="w-7 h-7 block md:hidden" />
              </IconBtnWrap>
              <h4 className="text-xl hidden md:blo-ck">Contact Us</h4>
            </li>
            <li className=" hidden sm:block">
              <IconBtnWrap bg="bg-white" size={12}>
                <UserIcon className="w-7 h-7" />
              </IconBtnWrap>
            </li>
            <li className=" hidden sm:block">
              <IconBtnWrap bg="bg-white" size={12}>
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
