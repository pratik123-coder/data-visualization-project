import express from 'express';

import { getAllUsersData } from '../controllers/user.controller.js';


const router = express.Router();



router.get('/user-data', getAllUsersData);

export default router;

