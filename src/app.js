const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes/view.router.js');

const {Server} = require('socket.io');
const app = express();
const port  = process.env.PORT || 8080;

const httpServer = app.listen(port, ()=>{
    console.log(`Servidor ouvindo na porta ${port}`);
});

const io = new Server(httpServer);

app.use(express.static('public'));
app.use('/', routes);
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

let messages = [];
io.on('connection', socket=>{
    console.log("Novo cliente conectado");

    socket.on('message', data=>{
        messages.push(data);
        io.emit('messageLogs', messages);
    });
});