import mongoose from "mongoose";
var categoriemSchema = mongoose.Schema({
    nomCategorie: String,
    imageCategorie: String,
    typeMenu:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Type'

    },
    });
    const Categoriem = mongoose.model('Categoriem', categoriemSchema);
    export default Categoriem
    