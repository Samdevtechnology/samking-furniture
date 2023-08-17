"use client";

import IconBtnWrap from "@/utils/IconBtnWrap";
import { useSession, signOut } from "next-auth/react";
import { UserIcon as OutlineUserIcon } from "@heroicons/react/24/outline";
import { UserIcon as SolidUserIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@/utils/MuiServerComponent";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const UserAvatar = () => {
  const { data: session, status } = useSession();
  const [openPopover, setOpenPopover] = useState(false);
  const router = useRouter();
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  const clickHandler = { onClick: () => setOpenPopover(false) };

  const signOutHandler = async () => {
    const res = await signOut({ redirect: false, callbackUrl: "/" });
    router.push(res.url);
  };

  if (status !== "authenticated") {
    return (
      <IconBtnWrap
        href="/login"
        bg="bg-white"
        size={12}
        className="rounded-full"
      >
        <OutlineUserIcon className="w-7 h-7" />
      </IconBtnWrap>
    );
  }

  return (
    <Popover open={openPopover} handler={setOpenPopover}>
      <PopoverHandler {...triggers}>
        <IconButton
          ripple={false}
          className={clsx(
            "bg-transparent shadow-none rounded-full w-12 h-12 max-w-[3rem] max-h-12 hover:shadow-none focus:shadow-none active:shadow-none active:opacity-100"
          )}
        >
          <IconBtnWrap
            as="span"
            bg="bg-white"
            size={12}
            className="rounded-full"
          >
            <SolidUserIcon className="w-7 h-7" />
          </IconBtnWrap>
        </IconButton>
      </PopoverHandler>
      <PopoverContent
        {...triggers}
        {...clickHandler}
        className="p-2 flex max-w-[13rem]"
      >
        <List className="w-full min-w-[12rem]">
          <Link href="/account">
            <ListItem>
              <ListItemPrefix>
                <OutlineUserIcon
                  strokeWidth={2}
                  className=" w-5 h-5 text-primary"
                />
              </ListItemPrefix>
              Account
            </ListItem>
          </Link>
          <Link href="/account">
            <ListItem>
              <ListItemPrefix>
                <OutlineUserIcon
                  strokeWidth={2}
                  className=" w-5 h-5 text-primary"
                />
              </ListItemPrefix>
              Account
            </ListItem>
          </Link>
          <Link href="/account">
            <ListItem>
              <ListItemPrefix>
                <OutlineUserIcon
                  strokeWidth={2}
                  className=" w-5 h-5 text-primary"
                />
              </ListItemPrefix>
              Account
            </ListItem>
          </Link>
          <Link href="/account">
            <ListItem>
              <ListItemPrefix>
                <OutlineUserIcon
                  strokeWidth={2}
                  className=" w-5 h-5 text-primary"
                />
              </ListItemPrefix>
              Account
            </ListItem>
          </Link>

          <div className="flex just-cont border-t-2 pt-2 border-blue-gray-50 font-secondary">
            <Button color="red" variant="text" onClick={signOutHandler}>
              LogOut
            </Button>
          </div>
        </List>
      </PopoverContent>
    </Popover>
  );
};

export default UserAvatar;
