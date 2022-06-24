import { prisma } from "../db/client";

// READ
export const getAllBlogs = async () => {
  const users = await prisma.blog.findMany({});
  return users;
};

export const getBlog = async (id: any) => {
  const user = await prisma.blog.findUnique({
    where: { id },
  });
  return user;
};

// CREATE
export const createBlog = async (
  title: string,
  author: string,
  body: string
) => {
  const blog = await prisma.blog.create({
    data: {
      title,
      author,
      body,
    },
  });
  return blog;
};

// UPDATE
export const updateBlog = async (id: any, updateData: any) => {
  const user = await prisma.blog.update({
    where: {
      id,
    },
    data: {
      ...updateData,
    },
  });
  return user;
};

// DELETE
export const deleteBlog = async (id: any) => {
  const user = await prisma.blog.delete({
    where: {
      id,
    },
  });
  return user;
};
