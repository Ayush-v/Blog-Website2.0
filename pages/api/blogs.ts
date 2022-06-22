import { NextApiRequest, NextApiResponse } from "next";
import { getAllUsers } from "../../prisma/endpoints";

export default async function getAllBlogs(
  req: NextApiRequest,
  res: NextApiResponse
) {}
