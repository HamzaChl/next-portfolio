import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const dir = path.join(process.cwd(), "public/Images/technologies");

  try {
    const files = fs.readdirSync(dir);
    const imagePaths = files.map((file) => `/Images/technologies/${file}`);

    res.status(200).json({ images: imagePaths });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des images" });
  }
}
