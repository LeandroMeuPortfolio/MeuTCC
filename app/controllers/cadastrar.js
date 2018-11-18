const buscaCep = require('busca-cep');
module.exports.cadastrarUsuarios = (app, req, res) =>{
    let dadosForm = req.body;
    
    req.check('nome','Nome é obigatorio').notEmpty();
    req.check('email','Email é obigatorio').notEmpty();
    req.check('senha','Senha é obigatorio').notEmpty();
    req.check('nascimento','Nascimento é obigatorio').notEmpty();
    req.check('sexo','Sexo é obigatorio').notEmpty();
    req.check('cep','Cep é obigatorio').notEmpty();

    const errors = req.validationErrors();

    const connection = app.config.dbConnection();
    const UsuariosDAO = new app.app.models.UsuariosDAO(connection);
    
    buscaCep(dadosForm.cep, {sync: false, timeout: 1000})
    .then(endereco => {
        UsuariosDAO.inserir(dadosForm, (err, result) => {
            
            UsuariosDAO.autenticar(dadosForm, (err, result) => {
                let usuario = result;
                req.session.usuario = usuario;

                UsuariosDAO.cadastrarNivel(usuario, (err, result) =>{
                });
                UsuariosDAO.cadastrarEndereco(usuario, endereco, (err, result) =>{
                    
                });
                UsuariosDAO.nivel(result, (err, result) => {
                    let nivel = result;
                    req.session.nivel = result;
                    res.render('perfilViews', {nivel: nivel, usuario: usuario});
                });
            });            
        });
    })
    .catch(erro => {
        
        res.render('index');
        return;
    });
}
module.exports.cadastrarAdm = (app, req, res) =>{
    let dadosForm = req.body;
    
    req.check('nome','Nome é obigatorio').notEmpty();
    req.check('email','Email é obigatorio').notEmpty();
    req.check('senha','Senha é obigatorio').notEmpty();
    req.check('nascimento','Nascimento é obigatorio').notEmpty();
    req.check('sexo','Sexo é obigatorio').notEmpty();
    

    const errors = req.validationErrors();

    const connection = app.config.dbConnection();
    const UsuariosDAO = new app.app.models.UsuariosDAO(connection);
    
    UsuariosDAO.inserirAdm(dadosForm, (err, result) => {
            res.render('perfilAdm');
    });    
}   