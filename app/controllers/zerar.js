module.exports.zerarFruta = (app, req, res) => {
    const dadosForm = req.session.usuario;
    const connection = app.config.dbConnection();
    const UsuariosDAO = new app.app.models.UsuariosDAO(connection);
    
    req.session.nivel[0].jogonivel1 = 0;

    let usuario = req.session.usuario;
    let nivel = req.session.nivel;

    UsuariosDAO.zerarFruta(dadosForm, nivel, (err, result) => {
               
        res.render('perfilViews',{usuario: usuario, nivel: nivel});
    });
}
module.exports.zerarObjeto = (app, req, res) => {
    const dadosForm = req.session.usuario;
    const connection = app.config.dbConnection();
    const UsuariosDAO = new app.app.models.UsuariosDAO(connection);
    
    req.session.nivel[0].jogonivel2 = 0;

    let usuario = req.session.usuario;
    let nivel = req.session.nivel;

    UsuariosDAO.zerarFruta(dadosForm, nivel, (err, result) => {
               
        res.render('perfilViews',{usuario: usuario, nivel: nivel});
    });
}
module.exports.zerarFrases = (app, req, res) => {
    const dadosForm = req.session.usuario;
    const connection = app.config.dbConnection();
    const UsuariosDAO = new app.app.models.UsuariosDAO(connection);
    
    req.session.nivel[0].jogonivel8 = 0;

    let usuario = req.session.usuario;
    let nivel = req.session.nivel;

    UsuariosDAO.zerarFruta(dadosForm, nivel, (err, result) => {
               
        res.render('perfilViews',{usuario: usuario, nivel: nivel});
    });
}
module.exports.zerarConta = (app, req, res) => {
    const dadosForm = req.session.usuario;
    const connection = app.config.dbConnection();
    const UsuariosDAO = new app.app.models.UsuariosDAO(connection);
    
    req.session.nivel[0].jogonivel9 = 0;

    let usuario = req.session.usuario;
    let nivel = req.session.nivel;

    UsuariosDAO.zerarFruta(dadosForm, nivel, (err, result) => {
               
        res.render('perfilViews',{usuario: usuario, nivel: nivel});
    });
}
module.exports.zerarConta = (app, req, res) => {
    const dadosForm = req.session.usuario;
    const connection = app.config.dbConnection();
    const UsuariosDAO = new app.app.models.UsuariosDAO(connection);
    
    req.session.nivel[0].jogonivel9 = 0;

    let usuario = req.session.usuario;
    let nivel = req.session.nivel;

    UsuariosDAO.zerarFruta(dadosForm, nivel, (err, result) => {
               
        res.render('perfilViews',{usuario: usuario, nivel: nivel});
    });
}
module.exports.zerarComparar = (app, req, res) => {
    const dadosForm = req.session.usuario;
    const connection = app.config.dbConnection();
    const UsuariosDAO = new app.app.models.UsuariosDAO(connection);
    
    req.session.nivel[0].jogonivel10 = 0;
                
    let usuario = req.session.usuario;
    let nivel = req.session.nivel;
    
    UsuariosDAO.zerarComparar(dadosForm, nivel, (err, result) => {
        
        
        res.render('perfilViews',{usuario: usuario, nivel: nivel});
    });
}