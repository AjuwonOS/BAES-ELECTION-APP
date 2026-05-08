import multer from "multer";
import {
  CONTESTANT_IMAGE_PATH,
} from "./util/constants.js";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadDir = path.join(__dirname,CONTESTANT_IMAGE_PATH );

fs.mkdirSync(uploadDir, { recursive: true });

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, CONTESTANT_IMAGE_PATH);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

export default upload