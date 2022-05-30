import mongoose from 'mongoose';
import Type from '../models/type.model.js';

export const getTypes = async (req, res) => { 
try {
const cat = await Type.find();
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}

}
export const getTypeByID = async (req, res) => { 
    try {
    const cat = await Type.findById(req.params.id);
    res.status(200).json(cat);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    }
    export const createType = async (req, res) => {
        const { nom, imagetype} = req.body;
        const newType = new Type({ nom:nom, imagetype:imagetype, 
        })
        try {
        await newType.save();
        res.status(201).json(newType );
        } catch (error) {
        res.status(409).json({ message: error.message });
        }
        }
        export const updateType= async (req, res) => {
            const { id } = req.params;
            const { nom, imagetype} = req.body;
            if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas 
            de type avec un id: ${id}`);
            const aut1 = { nom:nom, imagetype:imagetype,  id: id };
            await Type.findByIdAndUpdate(id, aut1);
            res.json(aut1);
            }
            export const deleteType= async (req, res) => {
                const { id } = req.params;
                if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas 
                de type avec l'ID: ${id}`);
                await Type.findByIdAndDelete(id);
                res.json({ message: "type supprimé avec succès." });
            
        
            }