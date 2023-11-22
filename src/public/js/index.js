const socket = io();

let user;
let chatBox = document.getElementById('chatBox');

Swal.fire({
    title:"Identificar",
    input: "text",
    text: "Digite o nome de usuário",
    inputValidator:(value)=>{
        return !value && 'Você precisa digitar um nome de usuário para continuar';
    },
    allowOutsideClick:false
}).then(result=>{
    user = result.value;
});

chatBox.addEventListener('keyup', evt=>{
    console.log('keyup', evt.key);
    if(evt.key==="Enter"){
        if(chatBox.value.trim().length>0){
            socket.emit("message", {user:user, message: chatBox.value});
        }
    }
});

socket.on('messageLogs', data=>{
    let log = document.getElementById('messageLogs');
    let messages = "";
    data.forEach(message=>{
        messages = messages + `${message.user} diz: ${message.message}</br>`;
    });
    log.innerHTML = messages;
});