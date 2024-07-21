import express from 'express';
import { protect } from '../middleware/authUserMiddleware';
import { addCampaign, deleteCampaignByID, getCampaignByID, getCampaignByUserID, getCampaigns, updateCampaign } from '../controllers/campaignController';


const router = express.Router();

router.post('/', addCampaign);
router.get('/', getCampaigns);
router.post('/user/:userId', getCampaignByUserID);
router.route('/:id').get(getCampaignByID).put(protect, updateCampaign).delete(protect, deleteCampaignByID);

export {
    router as campaignRouter
}