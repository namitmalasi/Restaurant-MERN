import express from "express";
import connectDB from "./database/db.js";
const app = express();

connectDB();
app.get("/", (req, res) => {
  res.send("skjdkjla");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
  console.log(`server started at Port: ${PORT}`);
});
