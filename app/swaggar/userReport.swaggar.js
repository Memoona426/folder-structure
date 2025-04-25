/**
 * @swagger
 * tags:
 *   name: Reports
 *   description: API endpoints
 */

/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: Create a new user report
 *     tags:
 *       - Reports
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *                 description: The user for whom the report is created.
 *               date:
 *                 type: string
 *                 format: date
 *                 description: The date of the report.
 *               task:
 *                 type: string
 *                 description: The task the user completed.
 *               status:
 *                 type: string
 *                 description: The status of the task.
 *               description:
 *                 type: string
 *                 description: A detailed description of the task or report.
 *     responses:
 *       201:
 *         description: Report created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Report created successfully
 *                 report:
 *                   type: object
 *                   properties:
 *                     userId:
 *                       type: string
 *                       example: "60c72b2f9d5d9b3f482abc12"
 *                     date:
 *                       type: string
 *                       example: "2025-04-25"
 *                     task:
 *                       type: string
 *                       example: "Complete project documentation"
 *                     status:
 *                       type: string
 *                       example: "Completed"
 *                     description:
 *                       type: string
 *                       example: "Completed the final documentation for the project."
 *       400:
 *         description: Report already submitted for this date
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/user/reports/checkUserActivitiesByAdmin:
 *   get:
 *     summary: Fetch all user reports by admin
 *     tags:
 *       - Reports
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Reports fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Reports fetched successfully"
 *                 reports:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       userId:
 *                         type: string
 *                         example: "60c72b2f9d5d9b3f482abc12"
 *                       date:
 *                         type: string
 *                         example: "2025-04-25"
 *                       task:
 *                         type: string
 *                         example: "Complete project documentation"
 *                       status:
 *                         type: string
 *                         example: "Completed"
 *                       description:
 *                         type: string
 *                         example: "Completed the final documentation for the project."
 *       400:
 *         description: Only admin can fetch the reports
 *       500:
 *         description: Internal server error
 */
