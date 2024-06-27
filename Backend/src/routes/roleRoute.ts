import express from 'express';
import { protect } from '../middleware/authUserMiddleware';
import { addRole, deleteRoleByID, getRoleByID, getRoles, updateRole } from '../controllers/roleController';


const router = express.Router();

router.post('/', addRole);
router.get('/', getRoles);
router.route('/:id').get(getRoleByID).put(protect, updateRole).delete(protect, deleteRoleByID);

export {
    router as roleRouter
}