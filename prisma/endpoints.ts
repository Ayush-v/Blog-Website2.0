import { prisma } from "../db/client";

// READ
export const getAllUsers = async () => {
  const users = await prisma.blog.findMany({});
  return users;
};

export const getUser = async (id: any) => {
  const user = await prisma.blog.findUnique({
    where: { id },
  });
  return user;
};

// CREATE
export const createUser = async (
  title: string,
  author: string,
  body: string
) => {
  const user = await prisma.blog.create({
    data: {
      title,
      author,
      body,
    },
  });
  return user;
};

// UPDATE
// export const updateUser = async (id: any, updateData: any) => {
//   const user = await prisma.blog.update({
//     where: {
//       id
//     },
//     data: {
//       ...updateData
//     }
//   })
//   return user
// }

// DELETE
export const deleteUser = async (id: any) => {
  const user = await prisma.blog.delete({
    where: {
      id,
    },
  });
  return user;
};
