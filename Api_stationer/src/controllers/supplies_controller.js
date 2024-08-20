import suppliesDao from '../daos/supplies.dao.js';

export const getAll = async (req, res) => {
    await suppliesDao.getAll()
    .then((supplies) => {
        res.json(supplies);
    })
    .catch((err) => {
        res.json({message:err})
    });
};
export const insertSupplie = async (req, res) => {
    await suppliesDao.insertSupplie(req.body)
    .then((supplie)=>{
        res.json(supplie);
    })
    .catch((err) =>{
        res.json({message:err})
    });
};
export const getOne = async (req,res)=>{     
    await suppliesDao.getOne(req.params.barcode)   
    .then(supplie => {
        if(supplie != null)                   
            res.json(supplie);
        else
            res.json({message:"School Supplies not found"});   
    })
    .catch(err=>{
        res.json({message:err})
    })
};
export const deleteOne = async (req,res)=>{        
    await suppliesDao.deleteOne(req.params.barcode)   
    .then(supplie => {
        if(supplie != null)                  
            res.json({message:"School Supplies delete"});
        else
            res.json({message:"School Supplies not found"});
    })
    .catch(err=>{
        res.json({message:err})
    })
};
export const updateOne = async (req,res)=>{        
    await suppliesDao.updateOne(req.params.barcode, req.body)   
    .then(supplie => {
        if(supplie != null)                 
            res.json({message:"School Supplies updated"});
        else
            res.json({message:"School Supplies not found"});
    })
    .catch(err=>{
        res.json({message:err})
    })
};
