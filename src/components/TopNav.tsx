import Link from "next/link";
import Container from "../utils/Container";
const TopNav = () => {
  return (
    <nav className="bg-secondary flex just-cont">
      <Container
        Variant="ul"
        className="flex py-2 flex-row justify-end divide-x-2 w-full"
      >
        <li className="pr-3">
          <Link href="/showrooms">Showrooms</Link>
        </li>
        <li className="px-3">
          <Link href="/inspirations">Inspirations</Link>
        </li>
        <li className="px-3">
          <Link href="/help">Help</Link>
        </li>
      </Container>
    </nav>
  );
};

export default TopNav;
