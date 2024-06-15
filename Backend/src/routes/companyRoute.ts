import express from 'express';
import { deleteCompanyByID, getCompanyByID, registerCompany, updateCompanyProfile } from '../controllers/companyController';
import { protect } from '../middleware/authUserMiddleware';


const router = express.Router();

router.post('/', registerCompany);
router.route('/profile/:id').get( protect, getCompanyByID).put(protect, updateCompanyProfile).delete(protect, deleteCompanyByID);

export {
    router as companyRouter
}