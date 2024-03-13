import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getSalaryDataForChart } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/", protectRoute, getSalaryDataForChart);


export default router;

