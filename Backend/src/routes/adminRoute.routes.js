import {Router} from "express";
import {getAllFeedback} from "../controllers/admin.controller.js";

const router = Router();

router.route("/feedbacks").get(getAllFeedback);

export default router;
