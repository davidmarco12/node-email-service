import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller";

const router = Router();

/**
 * @swagger
 * /api/auth/signup:
 *  post:
 *      summary: Create an account.
 *      tags:
 *          - Auth
 *      requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              username:
 *                                  type: string
 *                              password:
 *                                  type: string
 *                              email:
 *                                  type: string
 *
 *      responses:
 *              '200':
 *                  description: response with a json token
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 *                                  auth_token:
 *                                      type: string
 *
 */
router.post("/signup", signUp);

/**
 * @swagger
 * /api/auth/signin:
 *  post:
 *      summary: Access to the API.
 *      tags:
 *          - Auth
 *      requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              username:
 *                                  type: string
 *                              password:
 *                                  type: string
 *
 *      responses:
 *              '200':
 *                  description: response with a json token
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 *                                  auth_token:
 *                                      type: string
 *
 */
router.post("/signin", signIn);

export default router;
