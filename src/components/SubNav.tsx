import Link from "next/link";
import Container from "../utils/Container";
import TextLinkWrap from "@/utils/TextLinkWrap";

const linkStyle = "no-underline hover:underline hover:decoration-2";

const SubNav = () => {
  return (
    <nav className="bg-[#F9F6EE]/70 absolute z-10 hidden w-full top-0 sm:flex just-cont">
      <Container
        Variant="ul"
        className="flex py-2 flex-row justify-between w-full"
      >
        <li className="">
          <TextLinkWrap href="/" className={linkStyle}>
            Living Room
          </TextLinkWrap>
        </li>
        <li className="">
          <TextLinkWrap href="/" className={linkStyle}>
            Kitchen & Dining
          </TextLinkWrap>
        </li>
        <li className="">
          <TextLinkWrap href="/" className={linkStyle}>
            Bedroom
          </TextLinkWrap>
        </li>
        <li className=" hidden md:block">
          <TextLinkWrap href="/" className={linkStyle}>
            Storage Furniture
          </TextLinkWrap>
        </li>
        <li className=" hidden lg:block">
          <TextLinkWrap href="/" className={linkStyle}>
            Home Office & Study
          </TextLinkWrap>
        </li>
      </Container>
    </nav>
  );
};

export default SubNav;
