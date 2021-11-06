import express from 'express';
import { getPosts, createStyle } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createStyle);

export default router;