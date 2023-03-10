import { Router } from "express";
import { getUsersByDate } from "../controllers/stats.controller";
import { isAdmin, verify } from "../middlewares/auth.mw";
const router = Router();

/**
 * @swagger
 *
 * /api/stats:
 *  get:
 *      summary: Give a list of users with email send.
 *      security:
 *       - apiKeyAuth: []
 *      tags:
 *          - Stats
 *      parameters:
 *          - in: query
 *            name: date
 *            schema:
 *              type: string
 *            description: Date
 *
 *      responses:
 *              '200':
 *                  description: list of users
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                   properties:
 *                                      idUser:
 *                                          type: string
 *                                          example: aj23jhasd7978230-asdie-29387dshjas
 *                                      userName:
 *                                          type: string
 *                                          example: admin
 *                                      lastDateSend:
 *                                          type: string
 *                                          example: 2023-06-06
 *                                      emailNum:
 *                                          type: integer
 *                                          example: 5
 */
router.get("/", verify, isAdmin, getUsersByDate);

export default router;
