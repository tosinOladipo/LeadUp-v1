import express from 'express';
import { authUser, registerUser } from '../controllers/userController';
import { protect } from '../middleware/authUserMiddleware';


const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);


export {
    router as userRouter
}