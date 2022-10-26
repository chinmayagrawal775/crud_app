import express from 'express';
import { addController } from '../controllers/addController.js';
import { deleteController } from '../controllers/deleteController.js';
import { retriveController } from '../controllers/retriveController.js';
import { updateController } from '../controllers/updateController.js';

const router = express.Router();

router.get('/', retriveController)
router.post('/', addController)
router.get('/edit/:id', updateController.editPageController)
router.post('/update/:id', updateController.editContentController)
router.post('/delete/:id', deleteController)

export default router;