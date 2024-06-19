import express from 'express';
import { protect } from '../middleware/authUserMiddleware';
import { addRole, deleteRoleByID, getRoleByID, updateRole } from '../controllers/roleController';


const router = express.Router();

router.post('/', addRole);
router.route('/:id').get( protect, getRoleByID).put(protect, updateRole).delete(protect, deleteRoleByID);

export {
    router as roleRouter
}