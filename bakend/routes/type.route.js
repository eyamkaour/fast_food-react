import express from 'express';
const router = express.Router();
import { getTypes, getTypeByID, createType, updateType, deleteType } from '../controllers/type.controller.js';

/**
* @route GET /api/types
* @desc Get All types
* @access Public
*/
router.get('/', getTypes);
/**
* @route POST /api/types
* @desc Ajouter un type
* @access Public
*/
router.post('/', createType);
/**
* @route GET /api/types/:id
* @desc Renvoyer un type
* @access Public
*/
router.get('/:id', getTypeByID);
/**
* @route PUT /api/types/:id
* @desc Modifier un type
* @access Public
*/
router.put('/:id', updateType);
/**
* @route DELETE /api/types/:id
* @desc Supprimer un type
* @access Public
*/
router.delete('/:id', deleteType);
export default router;
