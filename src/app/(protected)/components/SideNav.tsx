"use client";

import Account from "@/assets/icons/Account";
import Detail from "@/assets/icons/Detail";
import Newsletter from "@/assets/icons/Newsletter";
import Password from "@/assets/icons/Password";
import Review from "@/assets/icons/Review";
import { ArchiveBoxIcon, HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const linkStyles = "p-4 pl-8 items-center flex hover:bg-secondary/30";
const activeLink = "bg-secondary hover:bg-secondary";
const SideNav = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const path = pathname.substring(10);
  const [currentPage, setCurrentPage] = useState(path);
  const role = session?.user.role.toLowerCase();
  const user = role === "user" ? "customer" : role;

  useEffect(() => {
    const path = pathname.substring(10);
    if (path) {
      setCurrentPage(path);
    }
  }, [pathname]);

  const signOutHandler = async () => {
    const res = await signOut({ redirect: false, callbackUrl: "/" });
    router.push(res.url);
  };

  return (
    <nav className="bg-primary text-white text-lg font-secondary cursor-pointer rounded-md">
      <ul>
        <li>
          <Link
            href={`/${user}/account`}
            className={`${twMerge(
              linkStyles,
              currentPage === "account" ? activeLink : ""
            )} rounded-t`}
          >
            <span className="mr-4">
              <Account className="w-6 h-6" />
            </span>
            MY ACCOUNT
          </Link>
        </li>
        <li>
          <Link
            href={`/${user}/order`}
            className={`${twMerge(
              linkStyles,
              currentPage === "order" ? activeLink : ""
            )}`}
          >
            <span className="mr-4">
              <ArchiveBoxIcon className="w-6 h-6" />
            </span>
            Orders
          </Link>
        </li>
        <li>
          <Link
            href={`/${user}/review`}
            className={`${twMerge(
              linkStyles,
              currentPage === "review" ? activeLink : ""
            )}`}
          >
            <span className="mr-4">
              <Review className="w-6 h-6" />
            </span>
            Pending Reviews
          </Link>
        </li>
        <li>
          <Link
            href={`/${user}/detail`}
            className={`${twMerge(
              linkStyles,
              currentPage === "detail" ? activeLink : ""
            )}`}
          >
            <span className="mr-4">
              <Detail className="w-6 h-6" />
            </span>
            Change Details
          </Link>
        </li>
        <li>
          <Link
            href={`/${user}/address`}
            className={`${twMerge(
              linkStyles,
              currentPage === "address" ? activeLink : ""
            )}`}
          >
            <span className="mr-4">
              <HomeIcon className="w-6 h-6" />
            </span>
            Delivery Addresses
          </Link>
        </li>
        <li>
          <Link
            href={`/${user}/password`}
            className={`${twMerge(
              linkStyles,
              currentPage === "password" ? activeLink : ""
            )}`}
          >
            <span className="mr-4">
              <Password className="w-6 h-6" />
            </span>
            Change Password
          </Link>
        </li>
        <li>
          <Link
            href={`/${user}/newsletter`}
            className={`${twMerge(
              linkStyles,
              currentPage === "newsletter" ? activeLink : ""
            )}`}
          >
            <span className="mr-4">
              <Newsletter className="w-6 h-6" />
            </span>
            Newsletter Preference
          </Link>
        </li>
        <li className="flex just-cont p-4 bg-secondary/80 text-red-400">
          <button onClick={signOutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
