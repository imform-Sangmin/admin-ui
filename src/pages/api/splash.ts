// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import TABLE_DATA, { TableData } from "@/consts/TableData";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TableData[]>
) {
  const data = req.body.data ? [...req.body.data] : [...TABLE_DATA];

  switch (req.method) {
    case "GET":
      res.status(200).json(data);
      break;
    case "POST":
      res.status(200).json([...data, req.body]);
      break;
    case "PUT":
      res
        .status(200)
        .json(
          data.map((item) =>
            item.id === req.body.id
              ? { ...item, status: req.body.status }
              : item
          )
        );
      break;
    case "DELETE":
      res.status(200).json(data.filter((item) => item.id !== req.body.id));
      break;
    default:
      res.status(405).end();
  }
}
