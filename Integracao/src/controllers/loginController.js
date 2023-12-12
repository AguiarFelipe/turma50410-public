const User = require('../models/userModels');

class LoginController{
    constructor(){
        this.router = require('express').Router();
        this.initializeRoutes();
    }

    initializeRoutes(){
        this.router.get('/login', this.getLogin.bind(this));
        this.router.post('/login', this.postLogin.bind(this));
    }

    getLogin(req, res){
        res.render('login', {error:null});
    }

    postLogin(req, res){
        let {username, password} = req.body;

        User.findOne({username, password})
        .then((user)=>{
            if(!user){
                res.render('login', {error: 'Usuário ou senha inválidos'});
            }else{
                res.render('dashboard', {username: username});
            }
        })
        .catch((err)=>{
            console.error(err);
            res.render('login', {error: 'Erro ao processar a solicitação'});
        });
    }

}

module.exports = LoginController;