import {Router} from 'express'
import {getAllUsers,getUserById,addUser,updateUserById,deleteUserById,deleteAllUsers} from '../controllers/user.controller.js'
//import { create } from 'lodash';
const router = Router()

router.get('/api/users', getAllUsers);

// Get user by ID
router.get('/api/users/:id', getUserById);

// Add new user
router.post('/api/users/', addUser);

// Update user by ID
router.put('/api/users/:id', updateUserById);

// Remove user by ID
router.delete('/api/users/:id', deleteUserById);

// Remove all users
router.delete('/api/users', deleteAllUsers);

export default router
