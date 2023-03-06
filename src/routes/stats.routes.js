import { Router } from "express";
import { getUsersByDate } from "../controllers/stats.controller";
import { isAdmin, verify } from "../middlewares/auth.mw";
const router = Router();


router.get('/', verify, isAdmin, getUsersByDate);



export default router;