import express from "express";
import mysql from "mysql2";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "siki12345",
  database: "rentale",
});

app.get("/", (req, res) => {
  res.json("woi lemao awikwok");
});

app.listen(8080, () => {
  console.log("berhasil le");
});
