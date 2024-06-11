"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleUser,
  Folder,
  FolderClosed,
  FolderOpen,
  LayoutDashboard,
  ListTodo,
  Plus,
} from "lucide-react";
import { useParams, usePathname } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import DialogModel from "./DialogModel";
import ProjectForm from "./ProjectForm";

// Navbar Items List
const navBarList = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Tasks",
    path: "/dashboard/my_tasks",
    icon: ListTodo,
  },
  {
    name: "Projects",
    path: "/dashboard/my_projects",
    icon: FolderClosed,
  },
  {
    name: "Members",
    path: "/dashboard/members",
    icon: CircleUser,
  },
];

const DashboardNavBar = () => {
  // Controls the opening and closure of projects
  const [isProjectOpen, setIsProjectOpen] = useState<boolean>(false);

  //   Function to Toggle the project
  const ToggleProject = () => setIsProjectOpen(!isProjectOpen);

  //   Style nav links based on the current state
  const pathname = usePathname();

  return (
    <div>
      <div className="p-3 bg-secondary h-screen">
        <Logo />

        <ul className="mt-8">
          {navBarList.map((item) => (
            <li
              key={item.name}
              className={`${
                pathname === item.path && "bg-primary text-white "
              } p-2 my-1 rounded-lg font-bold text-md hover:bg-muted-primary hover:light:text-white`}
            >
              <a href={item.path} className="flex items-center">
                <item.icon
                  className={`${
                    pathname === item.path && " text-white "
                  }  mr-2 font-thin text-muted-foreground text-sm`}
                />{" "}
                <span className="text-md font-light">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between mt-10">
          <p
            className="text-muted-foreground flex items-center text-md font-bold"
            onClick={ToggleProject}
          >
            {isProjectOpen ? (
              <ChevronDown
                className="text-muted-foreground"
                size={15}
                cursor={"pointer"}
              />
            ) : (
              <ChevronRight
                className="text-muted-foreground"
                size={15}
                cursor={"pointer"}
              />
            )}
            <span className="ml-2">Projects</span>
          </p>
          <div className="flex space-x-2">
            {isProjectOpen ? (
              <FolderOpen
                className="text-muted-foreground"
                size={15}
                cursor={"pointer"}
                onClick={ToggleProject}
              />
            ) : (
              <Folder
                onClick={ToggleProject}
                className="text-muted-foreground"
                size={15}
                cursor={"pointer"}
              />
            )}

            <Dialog modal>
              <DialogTrigger asChild>
                <Plus
                  className="text-muted-foreground"
                  size={15}
                  cursor={"pointer"}
                />
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

                {/* Form for submitting the projects to the server */}
                <ProjectForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavBar;
