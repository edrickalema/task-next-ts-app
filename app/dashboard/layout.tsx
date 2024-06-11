import React from "react";
import DashboardNavBar from "../components/DashboardNavBar";
import Header from "../components/Header";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import prisma from "@/utils/db";
import { getUser as getUserData } from "@/services/user/userData";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const { getUser, isAuthenticated } = await getKindeServerSession();

  if (await isAuthenticated()) {
    const user = await getUser();

    const name = user?.given_name + " " + user?.family_name;
    const email = user?.email as string;
    const picture = user?.picture as string;
    const id = user?.id as string;

    const userExists = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    // if the authenticated user is not in the database, add to the database
    if (!userExists) {
      await prisma.user.create({
        data: {
          id: id,
          name: name,
          email: email,
          picture: picture,
          colorTheme: "",
        },
      });
    }

    // Redirect to home page incase there is no user authenticated
    if (!user) {
      return redirect("/");
    }

    // Getting User from the database not kindle
    const userFromDb = await getUserData(user?.id as string);

    return (
      <main>
        <section className="grid grid-cols-[250px_1fr]">
          <aside>
            <DashboardNavBar />
          </aside>

          <div>
            <Header
              name={userFromDb?.name as string}
              email={userFromDb?.email as string}
              picture={userFromDb?.picture as string}
            />
            <div className="px-5 py-3">{children}</div>
          </div>
        </section>
      </main>
    );
  }

  return redirect("/");
};

export default DashboardLayout;
