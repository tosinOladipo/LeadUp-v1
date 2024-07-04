import express from 'express';
import { protect } from '../middleware/authUserMiddleware';
import { addFunnel, deleteFunnelByID, getFunnelByID, getFunnels } from '../controllers/funnelController';
import { updateCompanyProfile } from '../controllers/companyController';



const router = express.Router();

router.post('/', addFunnel);
router.get('/', getFunnels);
router.route('/:id').get(getFunnelByID).put(protect, updateCompanyProfile).delete(protect, deleteFunnelByID);

export {
    router as funnelRouter
}