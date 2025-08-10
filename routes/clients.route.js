import { Router } from 'express';
import {
  getClientsHandler,
  getClientHandlerByParam,
  postClientHandler,
  putClientHandler,
  deleteClientHandler
} from '../controllers/clients.controller.js';

const router = Router();

router.get('/', getClientsHandler);
router.get('/:id', getClientHandlerByParam);
router.post('/', postClientHandler);
router.put('/:id', putClientHandler);
router.delete('/:id', deleteClientHandler);

export default router;