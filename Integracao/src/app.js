const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

const LoginController = require('./controllers/loginController');
const AddController = require('./controllers/addController');
const UserController = require('./controllers/userController');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main',
    runtimeOptions:{
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb+srv://felipe:As123@codercluster.kr053x4.mongodb.net/?retryWrites=true&w=majority')
.catch((error)=>{
    if(error){
        console.log("Não foi possível conectar, motivo: "+error);
        process.exit();
    }
});
const db = mongoose.connection;

db.once('open', ()=>{
    console.log("Conectado ao MongoDB");
});

const loginController = new LoginController();
const addController = new AddController();
const userController = new UserController();

app.use('/users', userController.router);
app.use('/', loginController.router);
app.use('/', addController.router);

app.listen(3000, ()=>{
    console.log('Servidor conectado');
})