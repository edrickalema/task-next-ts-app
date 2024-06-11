import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "./components/Navbar";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();

  // Always Redirect to the dashboard when the user is authenticated

  if (await isAuthenticated()) {
    return redirect("/dashboard");
  }
  return (
    <main>
      <Navbar />
      <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <div>
              <span className="w-auto px-6 py-3 rounded-full bg-secondary">
                <span className="text-sm font-medium text-primary">
                  Streamline Your Workflow, Achieve More
                </span>
              </span>

              <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl">
                Transform Your Productivity with TaskTO
              </h1>
              <p className="max-w-xl mx-auto mt-8 text-lg lg:-text-xl text-secondary-foreground spacing-4">
                TaskTO is the ultimate tool to manage your projects and tasks
                effortlessly. Our intuitive platform helps you prioritize,
                collaborate, and accomplish your goals with ease.
              </p>
            </div>

            <div className="flex justify-center max-w-sm mx-auto mt-10">
              <RegisterLink>
                <Button className="w-fit" size={"lg"}>
                  Get Started
                </Button>
              </RegisterLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
