// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { pool } from "../../config/";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      const [rows] = await pool.query("SELECT * FROM users");
      console.log(rows);
      return res.status(200).json({ message: "no encontrado" });
    case "POST":
      console.log("wait a sec");
      console.log(req.body);
      const { name, price, description } = req.body;
      const [result] = await pool.query("INSERT INTO products SET ?", {
        name,
        price,
        description,
      });
      console.log(result);
      return res.status(200).json({ message: "Created new item " + result });
  }
}
