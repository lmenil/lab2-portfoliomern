import {Router} from 'express'
import {getAllContacts,getContactById,addContact,updateContactById,deleteContactById,deleteAllContacts} from '../controllers/contact.controller.js'

const router = Router()

router.get('/api/contacts', getAllContacts);

// Get user by ID
router.get('/api/contacts/:id', getContactById);

// Add new user
router.post('/api/contacts/', addContact);

// Update user by ID
router.put('/api/contacts/:id', updateContactById);

// Remove user by ID
router.delete('/api/contacts/:id', deleteContactById);

// Remove all users
router.delete('/api/contacts', deleteAllContacts);

export default router