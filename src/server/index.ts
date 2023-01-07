import express, { Response } from "express";
import path from "path";

type Port = number;

const app = express();
const port: Port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/*", (_, res: Response) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
