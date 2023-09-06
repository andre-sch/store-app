import fs from "fs";
import path from "path";

import { createConnection } from "./connection";

const migrationsDirectory = path.join(__dirname, "migrations");

fs.readdir(migrationsDirectory, async (error, files) => {
  if (error) return console.error(error);

  const client = await createConnection();

  files.forEach((fileName) => {
    const filePath = path.join(migrationsDirectory, fileName);

    fs.readFile(filePath, (error, data) => {
      if (error) return console.error(error);
      client.query(data.toString());
    });
  });
});
