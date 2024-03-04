import express from "express";
const router = express.Router();

import { singleUpload } from "../middleware/multer.js";
import { uploadImage, getAllImages } from "../controllers/imageController.js";
// Image upload route
router.route("/uploadImage").post(singleUpload, uploadImage);

router.route("/getAllImages").get(getAllImages);

export default router;
