import express from 'express';
import { protect } from '../../middleware/auth.js';
import { getCertificates, getCertificateById, createCertificate, updateCertificate, deleteCertificate } from '../../controllers/certificateController.js';

const router = express.Router();

router.get('/', getCertificates);
router.get('/:id', getCertificateById);
router.post('/', protect, createCertificate);
router.put('/:id', protect, updateCertificate);
router.delete('/:id', protect, deleteCertificate);

export default router;
