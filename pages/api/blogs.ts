import { NextApiRequest, NextApiResponse } from "next";
import {
  getAllBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../../prisma/endpoints";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET": {
        if (req.query.id) {
          const user = await getBlog(req.query.id);
          return res.status(200).json(user);
        } else {
          const users = await getAllBlogs();
          return res.json(users);
        }
      }
      case "POST": {
        const { title, author, body } = req.body;
        const user = await createBlog(title, author, body);
        return res.status(200).json({ status: "success" });
      }
      case "PUT": {
        const { id, ...updateData } = req.body;
        const user = await updateBlog(id, updateData);
        return res.json(user);
      }
      case "DELETE": {
        // Delete an existing user
        const { id } = req.body;
        const user = await deleteBlog(id);
        return res.json(user);
      }
      default:
        break;
    }
  } catch (err) {
    console.log(err);
  }
}
