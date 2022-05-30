import express from 'express';
const router = express.Router();

import{ getMenu,getMenuByID,createMenu,updateMenu,deleteMenu} from '../controllers/Menu.controller.js';
/**
* @route GET /api/menus
* @desc Get All menus
* @access Public
*/
router.get('/', getMenu);
/**
* @route POST /api/menus
* @desc Ajouter un menu
* @access Public
*/
router.post('/',createMenu);
/**
* @route GET /api/menus/:id
* @desc Renvoyer un menu
* @access Public
*/
router.get('/:id', getMenuByID);
/**
* @route PUT /api/menus/:id
* @desc Modifier un menu
* @access Public
*/
router.put('/:id',updateMenu);
/**
* @route DELETE /api/menus/:id
* @desc Supprimer un menu
* @access Public
*/
router.delete('/:id', deleteMenu);
export default router;
