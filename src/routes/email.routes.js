import { Router } from "express";
import { sendEmail } from "../controllers/email.controller";
import { verify } from "../middlewares/auth.mw";
const router = Router();





/**
 * @swagger
 * /api/email/:
 *  post:
 *      summary: Send an Email.
 *      tags:
 *          - Email
 *      requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              from:
 *                                  type: string
 *                              to:
 *                                  type: string
 *                              subject:
 *                                  type: string
 *                              text:
 *                                  type: string 
 *         
 *      responses:
 *              '200':
 *                  description: response with a success message
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 *                                      example: Email send
 *
 */
router.post('/', verify, sendEmail);



export default router;