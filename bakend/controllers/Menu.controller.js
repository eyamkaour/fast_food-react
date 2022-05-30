import mongoose from 'mongoose';
import Menu from '../models/Menu.model.js';

export const getMenu = async (req, res) => { 
try {
const cat = await Menu.find().populate('categories');
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}

}
export const getMenuByID = async (req, res) => { 
    try {
    const cat = await Menu.findById(req.params.id).populate('categories');
    res.status(200).json(cat);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    }
    export const createMenu = async (req, res) => {
        const { nom, designation,prix,imageMenu,categories,qtestock:qtestock} = req.body;
        const newMenu = new Menu({nom:nom, designation:designation, prix:prix,imageMenu:imageMenu,categories:categories,qtestock:qtestock
        })
        try {
        await newMenu.save();
        res.status(201).json(newMenu );
        } catch (error) {
        res.status(409).json({ message: error.message });
        }
        }
        export const updateMenu= async (req, res) => {
            const { id } = req.params;
            const { nom, designation,prix,imageMenu,categories,qtestock:qtestock} = req.body;
            if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas 
            de menu avec un id: ${id}`);
            const aut1 = {nom:nom, designation:designation, prix:prix,imageMenu:imageMenu,categories:categories,id:id,qtestock:qtestock
            };
            await Menu.findByIdAndUpdate(id, aut1);
            res.json(aut1);
            }
            export const deleteMenu= async (req, res) => {
                const { id } = req.params;
                if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas 
                de menu avec l'ID: ${id}`);
                await Menu.findByIdAndDelete(id);
                res.json({ message: "menu supprimé avec succès." });
            
        
            }