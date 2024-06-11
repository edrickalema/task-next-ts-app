/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ModeToggle } from "./ThemeToggle";

import {
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const Header = ({
  name,
  email,
  picture,
}: {
  name: string;
  email: string;
  picture: string;
}) => {
  return (
    <div className=" w-full px-5 py-3 flex justify-between items-center">
      <ModeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex space-x-2 items-center">
            <div className="h-[30px] w-[30px] text-center m-auto rounded-full bg-muted-foreground">
              <img
                src={picture}
                className="rounded-full h-full w-full object-cover"
              />
            </div>
            <p className="text-base flex space-x-1 items-center justify-center font-bold text-muted-foreground">
              <span className="block">{name}</span>
              <ChevronDown size={20} />
            </p>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-transparent">
          <DropdownMenuItem>
            <div className="flex flex-col">
              <p className="text-sm text-muted-foreground">Signed in as</p>
              <p className="text-base text-bold">{email}</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="flex space-y-5 flex-col">
              <Link className="text-md font-bold" href={"/dashboard/profile"}>
                Profile
              </Link>
              <Link className="text-md font-bold" href={"/dashboard/billings"}>
                Billings
              </Link>

              <LogoutLink>
                <Button
                  className="text-md font-bold"
                  size={"sm"}
                  variant={"destructive"}
                >
                  Logout
                </Button>
              </LogoutLink>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Header;
