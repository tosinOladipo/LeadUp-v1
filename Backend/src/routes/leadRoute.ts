import express from 'express';
import { protect } from '../middleware/authUserMiddleware';
import { deleteLeadByID, getLeadByID, registerLead, updateLeadProfile } from '../controllers/leadController';


const router = express.Router();

router.post('/', registerLead);
router.route('/profile/:id').get( getLeadByID).put(updateLeadProfile).delete(deleteLeadByID);

export {
    router as leadRouter
}