import type { NextApiRequest, NextApiResponse } from "next";
import { pool } from "../../../config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      return getAllProducts(req, res);
    case "POST":
      return saveProduct(req, res);
  }
}

const saveProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, price, description } = req.body;
  const [result] = await pool.query("INSERT INTO products SET ?", {
    name,
    price,
    description,
  });
  console.log(result);
  return res.status(200).json({ message: "Created new item " + result });
};

const getAllProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  const [rows] = await pool.query("SELECT * FROM products");
  return res.status(200).json(rows);
};
