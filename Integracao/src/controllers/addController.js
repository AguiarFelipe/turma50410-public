const express = require('express');
const multer = require('../utils');

const uploader = multer;

class AddController{
    constructor(){
        this.router = express.Router();
        this.initializeRoutes();
    }

    initializeRoutes(){
        this.router.get('/add', this.getAdd.bind(this));
        this.router.post('/add', uploader.single('image'), this.postAdd.bind(this));
    }
    
    getAdd(req, res){
        res.render('add');
    }

    postAdd(req, res){
        const image = req.file.buffer;
        res.send('Imagem salva com sucesso');
    }
}

module.exports = AddController;