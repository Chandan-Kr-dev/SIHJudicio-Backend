import express from "express";
import cors from "cors";
import { connectDb } from "./db/index.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",

    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

connectDb()

app.get("/", (req, res) => {
  res.send("App is Working !!");
});

app.listen(5000, (req, res) => {
  console.log("Server is running on port 5000");
});
