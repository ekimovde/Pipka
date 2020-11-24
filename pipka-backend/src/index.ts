import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";

import { UserController } from "./controllers";

const app = express();
const port = 3003;

app.use(bodyParser.json());

const User = new UserController();

mongoose.connect("mongodb://localhost:27017/pipka", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
});

app.get("/user/:id", User.show);
app.delete("/user/:id", User.delete);
app.post("/user/registration", User.create);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
