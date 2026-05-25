const Provider =
require('../models/providerModel');


// CREATE PROVIDER
const createProvider = async(req,res)=>{

    try{

        const provider =
        await Provider.create(req.body);

        res.status(201).json({
            message:'Provider Added',
            provider
        });

    }catch(error){

        res.status(500).json({
            message:error.message
        });
    }
};


// GET PROVIDERS
const getProviders = async(req,res)=>{

    try{

        const providers =
        await Provider.find();

        res.status(200).json(providers);

    }catch(error){

        res.status(500).json({
            message:error.message
        });
    }
};


// UPDATE PROVIDER
const updateProvider = async(req,res)=>{

    try{

        const id = req.params.id;

        const updatedProvider =
        await Provider.findByIdAndUpdate(
            id,
            req.body,
            { new:true }
        );

        res.status(200).json({
            message:'Provider Updated',
            updatedProvider
        });

    }catch(error){

        res.status(500).json({
            message:error.message
        });
    }
};


// DELETE PROVIDER
const deleteProvider = async(req,res)=>{

    try{

        const id = req.params.id;

        await Provider.findByIdAndDelete(id);

        res.status(200).json({
            message:'Provider Deleted'
        });

    }catch(error){

        res.status(500).json({
            message:error.message
        });
    }
};


module.exports = {
    createProvider,
    getProviders,
    updateProvider,
    deleteProvider
};