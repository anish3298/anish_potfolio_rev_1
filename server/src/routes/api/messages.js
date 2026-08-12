import express from 'express';
import { protect } from '../../middleware/auth.js';
import { getMessages, createMessage, markMessageRead, deleteMessage } from '../../controllers/messageController.js';

const router = express.Router();

router.get('/', protect, getMessages);
router.post('/', createMessage);
router.put('/:id/read', protect, markMessageRead);
router.delete('/:id', protect, deleteMessage);

export default router;
