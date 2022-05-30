import mongoose from "mongoose";
var menuSchema = mongoose.Schema({
    nom: String,
    designation:String,
    prix: String,
    imageMenu: String,
    qtestock:String,
    categories:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Categoriem'

    },
    });
    const Menu = mongoose.model('Menu', menuSchema);
    export default Menu
    