import express from 'express';
const router = express.Router();
import { getCategoriem, getCategoriemByID, createCategoriem, updateCategoriem, deleteCategoriem } from '../controllers/Categorie.controller.js' ;

/**
* @route GET /api/categoriems
* @desc Get All categoriems
* @access Public
*/
router.get('/', getCategoriem);
/**
* @route POST /api/categoriems
* @desc Ajouter un categoriem
* @access Public
*/
router.post('/', createCategoriem);
/**
* @route GET /api/categoriems/:id
* @desc Renvoyer un categoriem
* @access Public
*/
router.get('/:id', getCategoriemByID);
/**
* @route PUT /api/categoriems/:id
* @desc Modifier un categoriem
* @access Public
*/
router.put('/:id', updateCategoriem);
/**
* @route DELETE /api/categoriems/:id
* @desc Supprimer un categoriem
* @access Public
*/
router.delete('/:id', deleteCategoriem);
export default router;
