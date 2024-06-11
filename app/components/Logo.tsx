import { Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center justify-start">
      <Sparkles className="text-sm" size={40} />
      <Link href={"/"}>
        <h1 className="ml-2 font-[700]">
          <span className="text-white bg-primary p-2 rounded-lg">Tasky</span>
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
