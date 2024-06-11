"use client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

const Buttons = () => {
  const { pending } = useFormStatus();
  return (
    <div>
      {pending ? (
        <div className="flex justify-end items-center">
          <Button size={"sm"} disabled>
            <Loader2 className="animate-spin h-4 w-4 mr-2" />
            Saving ...
          </Button>
        </div>
      ) : (
        <div className="flex justify-end items-center">
          <Button size={"sm"}>Save</Button>
        </div>
      )}
      ;
    </div>
  );
};

export default Buttons;
