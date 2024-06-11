"use server";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { revalidatePath } from "next/cache";

const ProjectForm = () => {
  const FormSubmitted = async (formData: FormData) => {
    "use server";
    const name = formData.get("name");
    const color = formData.get("color");

    console.log(name, color);

    revalidatePath("/", "layout");
  };

  return (
    <form action={FormSubmitted}>
      <Label htmlFor="name" className="mb-5 block">
        Project Name
      </Label>
      <Input type="text" name="name" placeholder="Project name"></Input>
      <Label htmlFor="color" className="my-5 block">
        Color
      </Label>

      <Select name="color">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a color" />
        </SelectTrigger>
        <SelectContent className="w-full">
          <SelectGroup className="w-full">
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="green">Green</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
            <SelectItem value="yellow">Yellow</SelectItem>
            <SelectItem value="red">Red</SelectItem>
            <SelectItem value="blue">Blue</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button type="submit" className="mt-5 align-baseline">
        Save
      </Button>
    </form>
  );
};

export default ProjectForm;
