import mongoose from 'mongoose';
import Categoriem from '../models/Categoriem.model.js';

export const getCategoriem = async (req, res) => { 
try {
const cat = await Categoriem.find().populate('typeMenu');
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}

}
export const getCategoriemByID = async (req, res) => { 
    try {
    const cat = await Categoriem.findById(req.params.id).populate('typeMenu');
    res.status(200).json(cat);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    }
    export const createCategoriem = async (req, res) => {
        const { nomCategorie, imageCategorie,typeMenu} = req.body;
        const newCategorie = new Categoriem({ nomCategorie:nomCategorie, imageCategorie:imageCategorie, typeMenu:typeMenu
        })
        try {
        await newCategorie.save();
        res.status(201).json(newCategorie );
        } catch (error) {
        res.status(409).json({ message: error.message });
        }
        }
        export const updateCategoriem= async (req, res) => {
            const { id } = req.params;
            const { nomCategorie, imageCategorie,typeMenu} = req.body;
            if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas 
            de categorie avec un id: ${id}`);
            const aut1 = { nomCategorie:nomCategorie, imageCategorie:imageCategorie,typeMenu :typeMenu,  id: id };
            await Categoriem.findByIdAndUpdate(id, aut1);
            res.json(aut1);
            }
            export const deleteCategoriem= async (req, res) => {
                const { id } = req.params;
                if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas 
                de categorie avec l'ID: ${id}`);
                await Categoriem.findByIdAndDelete(id);
                res.json({ message: "categorie supprimé avec succès." });
            
        
            }