import express from "express";
import connectDB from "./database/db.js";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/auth.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/auth", authRoutes);

connectDB();

app.get("/", (req, res) => {
  res.send("skjdkjla");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
  console.log(`server started at Port: ${PORT}`);
});
