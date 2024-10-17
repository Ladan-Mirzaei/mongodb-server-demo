import express, { json } from "express";
import cors from "cors";
import db from "./util/db-connect.js";
import User from "./models/User.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.json({ success: true });
});

app.post("/users", async (req, res) => {
  const data = req.body;
  console.debug(data);
  const user = new User(data);
  await user.save();
  res.json({ success: true });
});

app.get("/users", async (req, res) => {
  const result = await User.find({});
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
