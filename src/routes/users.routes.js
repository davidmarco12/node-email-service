import { Router } from "express";
import { createUser, getUsers, updateUser } from "../controllers/user.controller";
const router = Router();




router.get('/', getUsers);



export default router;