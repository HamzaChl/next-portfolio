import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), "public", "projects.json");

  try {
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const projects = JSON.parse(fileContents);

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des projets" });
  }
}
