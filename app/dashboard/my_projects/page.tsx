"use server";

import DashboardTitle from "@/app/components/DashboardTitle";
import ProjectForm from "@/app/components/ProjectForm";
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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FolderArchive, FolderOpen } from "lucide-react";

import React from "react";

const MyProjectPage = () => {
  return (
    <main>
      <section className="">
        <div className="flex my-5 justify-between items-center">
          <DashboardTitle main="Projects" sub="Manage your projects" />
          <Dialog modal>
            <DialogTrigger asChild>
              <Button> Create Project</Button>
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

              <ProjectForm />
            </DialogContent>
          </Dialog>
        </div>

        <div>
          <Tabs defaultValue="active" className="w-full bg-transparent">
            <TabsList>
              <TabsTrigger value="active">
                <FolderOpen className="text-base" size={15} />
                <p className="ml-2">Active</p>
              </TabsTrigger>
              <TabsTrigger value="archived">
                <FolderArchive className="text-base" size={15} />
                <p className="ml-2"> Archived</p>
              </TabsTrigger>
            </TabsList>

            <div className="mt-5">
              <TabsContent value="active">This is active projects</TabsContent>
              <TabsContent value="archived">
                This are archived projects
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>
    </main>
  );
};

export default MyProjectPage;
