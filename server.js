import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extented: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extented: true }));

app.get("/", (req, res) => {
  res.send("Haioo");
});

app.listen(3000, () => {
  console.log("Server running");
});
