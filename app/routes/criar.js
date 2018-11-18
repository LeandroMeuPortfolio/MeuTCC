module.exports = (app) => {
    //Multe
    let multer  = require('multer');

    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'app/public/img')
        },
        filename: function (req, file, cb) {
          cb(null, file.fieldname + app.get('GlobalNomeImagem') +'.jpg')
        }
      })
      var upload = multer({ storage: storage })      
      
// Post criarFruta
    app.post('/criarFruta', (req, res)=>{
        app.app.controllers.criar.criarFruta(app, req, res);
    });
    app.post('/cadastrarFruta', (req, res)=>{
        app.app.controllers.criar.cadastrarFruta(app, req, res);
    });
    app.post('/criarImgFruta',upload.single('avatar-'), (req, res, next)=>{
        app.app.controllers.criar.jogoFruta(app, req, res);
    });

// Criar Objeto
    app.post('/criarObjeto', (req, res)=>{
        app.app.controllers.criar.criarObjeto(app, req, res);
    });
    app.post('/cadastrarObjeto', (req, res)=>{
        app.app.controllers.criar.cadastrarObjeto(app, req, res);
    });
    app.post('/criarImgObjeto',upload.single('avatar-'), (req, res, next)=>{
        app.app.controllers.criar.jogoObjeto(app, req, res);
    });

//Criar frases
    app.post('/criarFrases', (req, res)=>{
        app.app.controllers.criar.criarFrases(app, req, res);
    });
    app.post('/cadastrarFrases', (req, res)=>{
        app.app.controllers.criar.cadastrarFrases(app, req, res);
    });
    app.post('/criarImgFrases',upload.single('avatar-'), (req, res, next)=>{
        app.app.controllers.criar.jogoFrases(app, req, res);
    });
//Criar conta
    app.post('/criarConta', (req, res)=>{
        app.app.controllers.criar.criarConta(app, req, res);
    });
    app.post('/cadastrarConta', (req, res)=>{
        app.app.controllers.criar.cadastrarConta(app, req, res);
    });
//Criar comparar
    app.post('/criarComparar', (req, res)=>{
        app.app.controllers.criar.criarComparar(app, req, res);
    });
    app.post('/cadastrarComparar', (req, res)=>{
        app.app.controllers.criar.cadastrarComparar(app, req, res);
    });
//Voltar ADM
    app.post('/voltarAdm', (req, res)=>{
        let usuario = req.session.usuario;
        res.render('perfilAdm', {usuario: usuario});
    });
}
