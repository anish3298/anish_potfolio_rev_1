import express from 'express';
import { protect } from '../../middleware/auth.js';
import { getActiveResume, getResumes, uploadResume, updateResume, deleteResume, incrementDownload } from '../../controllers/resumeController.js';

const router = express.Router();

router.get('/', getActiveResume);
router.get('/all', protect, getResumes);
router.post('/', protect, uploadResume);
router.put('/:id', protect, updateResume);
router.delete('/:id', protect, deleteResume);
router.patch('/:id/download', incrementDownload);

export default router;
