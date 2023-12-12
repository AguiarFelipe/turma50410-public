const multer = require('multer');

const armazenamento = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, __dirname+'/public/imgs');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});

module.exports = multer({storage: armazenamento});