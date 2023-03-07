import { Router } from "express";
import { getUsersByDate } from "../controllers/stats.controller";
import { isAdmin, verify } from "../middlewares/auth.mw";
const router = Router();




/**
 * @swagger
 * /api/stats:
 *  post:
 *      summary: Give a list of users with email send.
 *      tags:
 *          - Stats
 *      requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              date:
 *                                  type: string
 *                                  example: 2023-06-07
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
 *                                      type: object
 *                                      properties:
 *                                          userName
 *                                              type: string
 *                                              example:
 *                                                  davidmarco21
 *                                          userEmail
 *                                              type: string
 *                                              example:
 *                                                  davidmarcolin@gmail.com
 *                                          countEmail
 *                                              type: integer
 *                                              example:
 *                                                  21
 *                                          dateSend
 *                                              type: string
 *                                              example:
 *                                                  2023-06-07
 *
 */
router.get('/', verify, isAdmin, getUsersByDate);



export default router;