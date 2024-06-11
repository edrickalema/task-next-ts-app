import React from "react";
import Logo from "./Logo";
import { ModeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
const Navbar = () => {
  return (
    <main className="">
      <section className="flex p-8 justify-between h-[20px] items-center">
        <Logo />

        <div className="flex space-x-4">
          <ModeToggle />

          <div className="flex space-x-2">
            <RegisterLink>
              <Button>Sign up</Button>
            </RegisterLink>
            <LoginLink>
              <Button variant={"secondary"}>Sign in</Button>
            </LoginLink>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Navbar;
