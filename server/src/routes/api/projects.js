import express from 'express';
import { protect } from '../../middleware/auth.js';
import { getProjects, getProjectBySlug, getProjectById, createProject, updateProject, deleteProject } from '../../controllers/projectController.js';

const router = express.Router();

router.get('/', getProjects);
router.get('/id/:id', getProjectById);
router.get('/:slug', getProjectBySlug);
router.post('/', protect, createProject);
router.put('/:id', protect, updateProject);
router.delete('/:id', protect, deleteProject);

export default router;
