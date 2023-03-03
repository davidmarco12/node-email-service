import { Router } from "express";
import { sendEmail } from "../controllers/email.controller";
import { verify } from "../middlewares/auth.mw";
const router = Router();

router.post('/', verify, sendEmail);



export default router;