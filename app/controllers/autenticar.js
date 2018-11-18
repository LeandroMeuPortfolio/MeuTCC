module.exports.loginUsuario = (app, req, res) =>{
    let dadosForm = req.body;
    req.check('email','Email é obigatorio').notEmpty();
    req.check('senha','Senha é obigatorio').notEmpty();

    const errors = req.validationErrors();
    
    const connection = app.config.dbConnection();
    const UsuariosDAO = new app.app.models.UsuariosDAO(connection);
    UsuariosDAO.autenticar(dadosForm, (err, result) => {
        let usuario = result;
        if(usuario.length){
            req.session.autortizadoUsuario = true;
            req.session.idusuario = usuario[0].idusuario;
            req.session.nome = usuario[0].nome;
            req.session.email = usuario[0].email;
            req.session.usuario = usuario;
        
        }else{
            req.session.autortizadoUsuario = false;
        }
        if(req.session.autortizadoUsuario){
            UsuariosDAO.nivel(result, (err, result) => {
                
                req.session.nivel = result;
                
                res.render('perfilViews', {nivel: req.session.nivel, usuario: usuario});
            
            });
        }else{
            res.render('index',{error:'Usuario não cadastrado'});
        } 
        connection.end(function(err) {
            // The connection is terminated now
        });
    });
}
module.exports.autenticarAdm = (app, req, res) =>{
    let dadosForm = req.body;
    req.check('email','Email é obigatorio').notEmpty();
    req.check('senha','Senha é obigatorio').notEmpty();

    const errors = req.validationErrors();
    
    const connection = app.config.dbConnection();
    const UsuariosDAO = new app.app.models.UsuariosDAO(connection);
    UsuariosDAO.autenticar(dadosForm, (err, result) => {
        let usuario = result;
        if(usuario.length){
            req.session.autortizadoAdm = true;
            req.session.idusuario = usuario[0].idusuario;
            req.session.nome = usuario[0].nome;
            req.session.email = usuario[0].email;
            req.session.usuario = usuario;
        
        }else{
            req.session.autortizadoAdm = false;
        }
        if(req.session.autortizadoAdm){
            UsuariosDAO.nivel(result, (err, result) => {
                let nivel = result;
                req.session.nivel = nivel;
                
                res.render('perfilAdm', {usuario: usuario});
            
            });
        }else{
            res.render('adm',{error:'Usuario não cadastrado'});
        } 
        connection.end(function(err) {
            // The connection is terminated now
        });
    });
}    