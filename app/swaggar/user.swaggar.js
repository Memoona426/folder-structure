/**
 * @swagger
 * tags:
 *   name: User
 *   description: API endpoints
 */

/**
 * @swagger
 * /api/user/createUserBySuperAdmin:
 *   post:
 *     summary: Create an admin user (Only accessible by superAdmin)
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - isActive
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: mailto:john@example.com
 *               password:
 *                 type: string
 *                 example: secret123
 *               isActive:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: User created successfully
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
 *                   example: User has been created successfully
 *                 profile:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     email:
 *                       type: string
 *                     role:
 *                       type: string
 *                       example: admin
 *                     isActive:
 *                       type: boolean
 *       400:
 *         description: Bad request or not authorized
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/user/createUserByAdmin:
 *   post:
 *     summary: Create a user (Only accessible by admin)
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - isActive
 *             properties:
 *               name:
 *                 type: string
 *                 example: Jane Doe
 *               email:
 *                 type: string
 *                 example: mailto:jane@example.com
 *               password:
 *                 type: string
 *                 example: strongpassword123
 *               isActive:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: User created successfully
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
 *                   example: User has been created successfully
 *                 profile:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     email:
 *                       type: string
 *                     role:
 *                       type: string
 *                       example: user
 *                     isActive:
 *                       type: boolean
 *       400:
 *         description: Bad request or not authorized
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/user/createUserByAdmin:
 *   post:
 *     summary: Create a user (Only accessible by admin)
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - isActive
 *             properties:
 *               name:
 *                 type: string
 *                 example: Jane Doe
 *               email:
 *                 type: string
 *                 example: mailto:jane@example.com
 *               password:
 *                 type: string
 *                 example: strongpassword123
 *               isActive:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: User created successfully
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
 *                   example: User has been created successfully
 *                 profile:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     email:
 *                       type: string
 *                     role:
 *                       type: string
 *                       example: user
 *                     isActive:
 *                       type: boolean
 *       400:
 *         description: Bad request or not authorized
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/user/toggleUserByAdmin:
 *   patch:
 *     summary: Toggle user activation status (Only admin)
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: userId
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to toggle
 *     responses:
 *       200:
 *         description: User status has been toggled
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
 *                   example: user status has been toggle
 *                 user:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     email:
 *                       type: string
 *                     isActive:
 *                       type: boolean
 *       400:
 *         description: Bad request or not authorized
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/user/getAllUserBySuperAdmin:
 *   get:
 *     summary: Fetch all admins and users (Only Super Admin)
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: page
 *         in: query
 *         required: true
 *         schema:
 *           type: integer
 *         description: Page Number
 *       - name: rowPerPageLimit
 *         in: query
 *         required: true
 *         schema:
 *           type: integer
 *         description: Amount of Records per page
 *     responses:
 *       200:
 *         description: Successfully fetched all admins and users
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
 *                   example: fetch all admin and users
 *                 admin:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       email:
 *                         type: string
 *                       role:
 *                         type: string
 *                       isActive:
 *                         type: boolean
 *                 user:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       email:
 *                         type: string
 *                       role:
 *                         type: string
 *                       isActive:
 *                         type: boolean
 *       400:
 *         description: Not authorized (Only Super Admin)
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/user/getAllUserByAdmin:
 *   get:
 *     summary: Fetch all users (Only Admin)
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: page
 *         in: query
 *         required: true
 *         schema:
 *           type: integer
 *         description: Page Number
 *       - name: rowPerPageLimit
 *         in: query
 *         required: true
 *         schema:
 *           type: integer
 *         description: Amount of Records per page
 *     responses:
 *       200:
 *         description: Successfully fetched all users
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
 *                   example: fetch all users
 *                 user:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       email:
 *                         type: string
 *                       role:
 *                         type: string
 *                       isActive:
 *                         type: boolean
 *       400:
 *         description: Not authorized (Only Admin)
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/user/assignProfileBySuperAdmin:
 *   patch:
 *     summary: Assign profile permission (Only Super Admin)
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID to assign the profile permission
 *     responses:
 *       200:
 *         description: Successfully assigned profile permission to the user
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
 *                   example: Permission Assigned to user
 *                 user:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     email:
 *                       type: string
 *                     role:
 *                       type: string
 *                     permissions:
 *                       type: string
 *                       example: "profile"
 *       400:
 *         description: Not authorized (Only Super Admin)
 *       500:
 *         description: Internal server error
 */
