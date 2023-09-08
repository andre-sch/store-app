import "dotenv/config";
import "./database/runMigrations";

import express from "express";

import { router } from "./router";
import { errorHandler } from "./errors/errorHandler";

const port = 3000;
const app = express();

app.use(express.json());
app.use(router, errorHandler);

app.listen(port, () => console.log(`Server Running on port ${port}.`));
