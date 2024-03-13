import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getSalaryDataForChart } from '../controllers/user.controller.js';
import { getUserData } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/", protectRoute, getSalaryDataForChart);
// This route requires authentication
router.get('/user-data', protectRoute, getUserData);


export default router;

