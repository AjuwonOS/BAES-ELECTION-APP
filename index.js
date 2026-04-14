import express, { json, static as static_} from "express";
import "./connect.js";
import { createServer } from "http";
import { initSocket } from "./util/socketSetup.js"
import routes from "./routes/index.js";
import { PORT } from "./util/constants.js";


const app = express();
const server = createServer(app)
export const io = initSocket(server) // I do not like this!!!!!!!!!

app.use(json(),routes);

app.get("/", (req, res) => {
  res.send("Hello");
});

server.listen(PORT, () => {
  console.log(`This application is running on port ${PORT}`);
});
