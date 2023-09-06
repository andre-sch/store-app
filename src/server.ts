import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (request: Request, response: Response) => {
  response.json({ message: "Hello world!" });
});

app.listen(port, () => console.log(`Server Running on port ${port}.`));
