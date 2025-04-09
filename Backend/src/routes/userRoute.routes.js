import {Router} from "express";
import {submitFeedback} from "../controllers/user.controller.js";

const router = Router();

router.route("/submit-feedback").post(submitFeedback);

export default router;
