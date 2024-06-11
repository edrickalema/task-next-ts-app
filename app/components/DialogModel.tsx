"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import useDialog from "../hooks/useDialog";
import { Plus } from "lucide-react";

const DialogModel = ({ trigger, isBtn }: { trigger?: any; isBtn: boolean }) => {
  const { onClose, isOpen } = useDialog();
  return (
    <Dialog modal onOpenChange={onClose} open={isOpen} defaultOpen={isOpen}>
      <DialogTrigger asChild>
        {isBtn ? (
          <Button> Create Project</Button>
        ) : (
          <Plus
            className="text-muted-foreground"
            size={15}
            cursor={"pointer"}
          />
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <p>Create Project</p>
          </DialogTitle>
          <DialogDescription>
            <p className="text-sm text-muted-foreground">
              Fully add your favorite projects to your account
            </p>
          </DialogDescription>
        </DialogHeader>

        <form>
          <Label htmlFor="name">Project Name</Label>
          <Input type="text" name="name" placeholder="Project name"></Input>
          <Label htmlFor="color">Color</Label>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a color" />
            </SelectTrigger>
            <SelectContent className="w-full">
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="green">Green</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
                <SelectItem value="yellow">Yellow</SelectItem>
                <SelectItem value="red">Red</SelectItem>
                <SelectItem value="blue">Blue</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </form>

        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogModel;
