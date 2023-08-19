import express from 'express';
const router = express.Router();
import { findMatches } from '../controllers/matchesController.js';

router.get('/matches', findMatches)

export default router;