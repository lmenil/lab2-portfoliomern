import {Router} from 'express'
import {getAllContacts,getContactById,addContact,updateContactById,deleteContactById,deleteAllContacts} from '../controllers/contact.controller.js'

const router = Router()

router.get('/api/contacts', getAllContacts);


router.get('/api/contacts/:id', getContactById);


router.post('/api/contacts/', addContact);


router.put('/api/contacts/:id', updateContactById);


router.delete('/api/contacts/:id', deleteContactById);


router.delete('/api/contacts', deleteAllContacts);

export default router