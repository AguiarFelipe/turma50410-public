const express = require('express');
const User = require('../models/userModels');

class UserController{
    constructor(){
        this.router = express.Router();
        this.initializeRoutes();
    }

    initializeRoutes(){
        this.router.get('/list', this.getListUsers.bind(this));
        this.router.get('/add', this.getAddUser.bind(this));
        this.router.post('/adding', this.postAddUser.bind(this));
    }

    async getListUsers(req, res, next){
        try{
            const users = await User.find();
            res.render('listUsers', {users});
        }catch(error){
            next(error);
        }
    }

    getAddUser(req, res){
        res.render('addUser');
    }

    async postAddUser(req, res, next){
        let {username, password} = req.body;
        try{
            await User.create({username, password});
            res.redirect('/users/list');
        }catch(error){
            next(error);
        }
    }
}

module.exports = UserController;