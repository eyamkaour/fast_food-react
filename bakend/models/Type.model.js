import mongoose from "mongoose"
var typeSchema = mongoose.Schema({
nom: String,
imagetype: String
});
const Type = mongoose.model('Type', typeSchema);
export default  Type
