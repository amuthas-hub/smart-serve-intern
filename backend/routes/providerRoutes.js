const express = require('express');

const router = express.Router();

const {

    createProvider,
    getProviders,
    updateProvider,
    deleteProvider

} = require('../controllers/providerController');


// CREATE
router.post('/',createProvider);


// GET
router.get('/',getProviders);


// UPDATE
router.put('/:id',updateProvider);


// DELETE
router.delete('/:id',deleteProvider);


module.exports = router;