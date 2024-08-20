import {Schema, model} from 'mongoose';
const stationerySchema = new Schema({
    barcode: {
        type: String,
        required: true,
        unique: true
    },
    nombre: String,
    description: String,
    brand: String,
    category: String,
    price: Number,
    cost: Number,
    supplier: String,//proveedor
    registrationDate: String
},{
    versionKey:false
});

export default model('supplie',stationerySchema)