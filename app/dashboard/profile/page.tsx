/* eslint-disable @next/next/no-img-element */
import DashboardTitle from "@/app/components/DashboardTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";
import { getUser as getUserData } from "@/services/user/userData";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import Buttons from "@/app/components/Buttons";
const ProfilePage = async () => {
  const { getUser } = await getKindeServerSession();

  // user data from the kind server
  const user = await getUser();

  // Getting User Data from supa base
  const userData = await getUserData(user?.id as string);

  // Updating user data from supa base
  const postUserData = async (formData: FormData) => {
    "use server";
    const name = formData.get("name") as string;
    const color = formData.get("color") as string;

    await prisma.user.update({
      where: {
        id: user?.id as string,
      },
      data: {
        name,
        colorTheme: color,
      },
    });

    revalidatePath("/dashboard");
  };

  return (
    <main>
      <DashboardTitle main="Profile" sub="Manage your profile" />

      {/* Card to contain profile data from the kind database */}
      <Card>
        <CardHeader className="flex items-center justify-center">
          <div className="h-[80px] w-[80px] rounded-full">
            <img
              src={user?.picture as string}
              className="w-full h-full rounded-full bg-cover"
              alt=""
            />
          </div>
        </CardHeader>

        <CardContent>
          <form action={postUserData}>
            <div className="flex items-center">
              <Label className="mr-3">Name</Label>
              <Input
                defaultValue={userData?.name as string}
                type="text"
                name="name"
              />
            </div>
            <div className="flex items-center mt-5">
              <Label className="mr-3">Email</Label>
              <Input value={userData?.email as string} type="email" disabled />
            </div>

            {/* Select user color theme */}
            <div className="flex items-center my-5">
              <Label className="mr-3">Theme</Label>
              <Select name="color" defaultValue={userData?.colorTheme}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a color theme" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup className="w-full">
                    <SelectLabel>Color Theme</SelectLabel>
                    <SelectItem value="theme-green">Green</SelectItem>
                    <SelectItem value="theme-violet">Violet</SelectItem>
                    <SelectItem value="theme-blue">Blue</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <Buttons />
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default ProfilePage;
