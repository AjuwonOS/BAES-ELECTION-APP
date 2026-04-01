import multer from "multer";
import {
  CONTESTANT_IMAGE_PATH,
} from "../util/constants.js";

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