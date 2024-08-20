import Supplie from "../models/supplie.js";
const suppliesDao = {};

suppliesDao.getAll = async () => {
    return await Supplie.find();
}
suppliesDao.insertSupplie = async (supplie) => {
    return await Supplie.create(supplie);
}

suppliesDao.getOne = async(barcode)=>{
    return await Supplie.findOne({barcode:barcode})
}
suppliesDao.deleteOne = async(barcode)=>{
    return await Supplie.findOneAndDelete({barcode:barcode})
}
suppliesDao.updateOne = async(barcode, supplie)=>{
    return await Supplie.findOneAndUpdate({barcode:barcode},supplie)
}
export default suppliesDao;