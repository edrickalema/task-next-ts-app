import prisma from "@/utils/db";
// Check and Update User in the DataBase
export const getUser = async (id: string) => {
  if (id) {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        name: true,
        email: true,
        colorTheme: true,
        id: true,
        picture: true,
      },
    });

    if (user) {
      return user;
    }
  }
};
