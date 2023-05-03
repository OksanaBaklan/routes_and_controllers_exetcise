/** @format */

import express from "express";
import usersRouter from "./routes/users.js";
const app = express();
const PORT = 2000;

app.use(express.json());

app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log("servers PORT:", PORT);
});
