import express, { json, static as static_} from "express";
import "./connect.js";
import { createServer } from "http";
import { initSocket } from "./util/socketSetup.js"
import routes from "./routes/index.js";
import { clientPath, PORT } from "./util/constants.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const htmlPath = path.join(__dirname, clientPath);

const app = express();
const server = createServer(app)
export const io = initSocket(server) // I do not like this!!!!!!!!!

app.use(json(),routes);

app.use(express.static(clientPath));


app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(htmlPath, "index.html"));
});

server.listen(PORT, () => {
  console.log(`This application is running on port 3000`);
});
