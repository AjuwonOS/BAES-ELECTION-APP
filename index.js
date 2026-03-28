import express, { json } from "express";
import "./connect.js";
import routes from "./routes/index.js";

const app = express();


app.use(json(),routes);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
