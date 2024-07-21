import express from 'express';
import { authUser, getAllUsers, logoutUser, registerUser, updateUser } from '../controllers/userController';
import { protect } from '../middleware/authUserMiddleware';


const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.get('/', getAllUsers)
router.put('/:id', updateUser)

export {
    router as userRouter
}