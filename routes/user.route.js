import { Router } from "express";
import usrCtrl from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(usrCtrl.register);

export default router;
