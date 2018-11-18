module.exports.jogarFruta = (app, req, res) => {
    let dadosForm = {}; 
    dadosForm.nivel = req.session.nivel;
    let usuario = req.session.usuario;
    
    const connection = app.config.dbConnection();
    const UsuariosDAO = new app.app.models.UsuariosDAO(connection);
    
    UsuariosDAO.jogoFruta(dadosForm, (err, result)=>{
        
        if(result.length > 0){
    
            res.render('jogos/jogoFruta',{ dadosForm: result, error:{} });
        }else{
    
            res.render('perfilViews', {nivel: dadosForm.nivel, usuario: usuario});
        }
    }); 
}

module.exports.jogarObjeto = (app, req, res) => {
    let dadosForm = {}; 
    dadosForm.nivel = req.session.nivel;
    let usuario = req.session.usuario;
    
    const connection = app.config.dbConnection();
    const UsuariosDAO = new app.app.models.UsuariosDAO(connection);
    
    UsuariosDAO.jogoObjeto(dadosForm, (err, result)=>{
        
        if(result.length > 0){
    
            res.render('jogos/jogoObjeto',{ dadosForm: result, error:{} });
        }else{
    
            res.render('perfilViews', {nivel: dadosForm.nivel, usuario: usuario});
        }
    }); 
}

module.exports.jogarComparar = (app, req, res) => {
    let dadosForm = {}; 
   
    dadosForm.nivel = req.session.nivel;
    let usuario = req.session.usuario;

    const connection = app.config.dbConnection();
    const UsuariosDAO = new app.app.models.UsuariosDAO(connection);
    
    UsuariosDAO.jogoComparar(dadosForm, (err, result)=>{
        
        if(result.length > 0){            
            
            res.render('jogos/jogoComparar',{ dadosForm: result, error:{} });
        }else{
            
            res.render('perfilViews', {nivel: dadosForm.nivel, usuario: usuario});
        }
    })
}
module.exports.jogarConta = (app, req, res) => {
    let dadosForm = {}; 
   
    dadosForm.nivel = req.session.nivel;
    let usuario = req.session.usuario;

    const connection = app.config.dbConnection();
    const UsuariosDAO = new app.app.models.UsuariosDAO(connection);
    
    UsuariosDAO.jogoConta(dadosForm, (err, result)=>{
        
        if(result.length > 0){            
            
            res.render('jogos/jogoConta',{ dadosForm: result, error: {} });
        }else{
            
            res.render('perfilViews', {nivel: dadosForm.nivel, usuario: usuario});
        }
    })
}
module.exports.jogarFrases = (app, req, res) => {
    let dadosForm = {}; 
   
    dadosForm.nivel = req.session.nivel;
    let usuario = req.session.usuario;

    const connection = app.config.dbConnection();
    const UsuariosDAO = new app.app.models.UsuariosDAO(connection);
    
    UsuariosDAO.jogoFrases(dadosForm, (err, result)=>{
        
        if(result.length > 0){            
            
            res.render('jogos/jogoFrases',{ dadosForm: result, error: {} });
        }else{
            
            res.render('perfilViews', {nivel: dadosForm.nivel, usuario: usuario});
        }
    })
}