// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import TABLE_DATA from "@/consts/TableData";
import type { NextApiRequest, NextApiResponse } from "next";

let data = [...TABLE_DATA];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const _req = req.body ? JSON.parse(req.body) : null;

  switch (req.method) {
    case "GET":
      let filteredData = [...data];

      if (req.query) {
        if (req.query.email && req.query.email !== "undefined") {
          console.log("email");

          const searchQuery = req.query.email.toString().toLowerCase();
          filteredData = filteredData.filter((item) =>
            item.email.toLowerCase().includes(searchQuery)
          );
        }

        if (req.query.name && req.query.name !== "undefined") {
          console.log("name");
          const searchQuery = req.query.name.toString().toLowerCase();
          filteredData = filteredData.filter((item) =>
            item.name.toLowerCase().includes(searchQuery)
          );
        }

        if (req.query.status && req.query.status !== "undefined") {
          console.log("status");
          filteredData = filteredData.filter((item) =>
            req.query.status === "active"
              ? item.status === true
              : req.query.status === "inactive"
              ? item.status === false
              : item
          );
        }
      }

      res.status(200).json(filteredData);
      break;
    case "POST":
      res.status(200).json([...data, req.body]);
      break;
    case "PUT":
      if (_req.id && _req.data) {
        console.log(_req.data?.status);

        data = data.map((item) =>
          item.id === _req.id
            ? {
                ...item,
                status:
                  _req.data?.status !== undefined
                    ? _req.data?.status
                    : item.status,
                amount:
                  _req.data?.amount !== undefined
                    ? _req.data?.amount
                    : item.amount,
                email:
                  _req.data?.email !== undefined
                    ? _req.data?.email
                    : item.email,
              }
            : item
        );

        res.status(200).json({
          data,
          success: true,
        });
      } else {
        res.status(400).json({ error: "Invalid request" });
      }
      break;
    case "DELETE":
      if (_req.id) {
        data = data.filter((item) => item.id !== _req.id);
        res.status(200).json(data);
      } else {
        res.status(400).json({ error: "Invalid request" });
      }
      break;
    default:
      res.status(405).end();
  }
}
