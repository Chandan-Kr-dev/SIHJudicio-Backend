import express from "express";
import cors from "cors";
import { connectDb } from "./db/index.js";
import authRouter from "./routes/authRoutes.js";
import bodyParser from "body-parser";
import caseRouter from "./routes/caseRoutes.js";

const app = express();
app.use(bodyParser.json());
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

//Routes
app.use('/auth',authRouter)

app.use('/api/cases',caseRouter)


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
