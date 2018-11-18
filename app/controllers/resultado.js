module.exports.fruta = (app, req, res)=>{
    let dadosForm = req.body; 
    if(dadosForm.opcao === dadosForm.resposta){
        
        req.session.nivel[0].jogonivel1 += 1;
    
        dadosForm.nivel = req.session.nivel;
        dadosForm.idusuario = req.session.idusuario;
        let usuario = req.session.usuario;
    
        const connection = app.config.dbConnection();
        const UsuariosDAO = new app.app.models.UsuariosDAO(connection);

        UsuariosDAO.inserirNivel1(dadosForm, (err, result) => {
            UsuariosDAO.jogoFruta(dadosForm, (err, result)=>{
                
                if(result.length > 0){
                    
                    res.render('jogos/jogoFruta',{ dadosForm: result, error:{} });
                }else{        
                
                res.render('perfilViews', {nivel: dadosForm.nivel, usuario: usuario});
                }
            }); 
        });
    }else{
        dadosForm.nivel = req.session.nivel;
        dadosForm.idusuario = req.session.idusuario;
        let usuario = req.session.usuario;
        let error = []; 
        error[0]= 'Reposta errada!';
    
        const connection = app.config.dbConnection();
        const UsuariosDAO = new app.app.models.UsuariosDAO(connection);

        UsuariosDAO.inserirNivel1(dadosForm, (err, result) => {
            UsuariosDAO.jogoFruta(dadosForm, (err, result)=>{
                
                if(result.length > 0){
                    
                    res.render('jogos/jogoFruta',{ dadosForm: result, error: error });
                }else{        
                
                res.render('perfilViews', {nivel: dadosForm.nivel, usuario: usuario});
                }
            }); 
        });
    }    
}
module.exports.objeto = (app, req, res)=>{
    let dadosForm = req.body; 
    if(dadosForm.opcao === dadosForm.resposta){
        
        req.session.nivel[0].jogonivel2 += 1;
    
        dadosForm.nivel = req.session.nivel;
        dadosForm.idusuario = req.session.idusuario;
        let usuario = req.session.usuario;
    
        const connection = app.config.dbConnection();
        const UsuariosDAO = new app.app.models.UsuariosDAO(connection);

        UsuariosDAO.inserirNivel2(dadosForm, (err, result) => {
            UsuariosDAO.jogoObjeto(dadosForm, (err, result)=>{
                
                if(result.length > 0){
                    
                    res.render('jogos/jogoObjeto',{ dadosForm: result });
                }else{        
                
                res.render('perfilViews', {nivel: dadosForm.nivel, usuario: usuario});
                }
            }); 
        });
    }else{
        dadosForm.nivel = req.session.nivel;
        dadosForm.idusuario = req.session.idusuario;
        let usuario = req.session.usuario;
        let error = []; 
        error[0]= 'Reposta errada!';
    
        const connection = app.config.dbConnection();
        const UsuariosDAO = new app.app.models.UsuariosDAO(connection);

        UsuariosDAO.inserirNivel2(dadosForm, (err, result) => {
            UsuariosDAO.jogoObjeto(dadosForm, (err, result)=>{
                
                if(result.length > 0){
                    
                    res.render('jogos/jogoObjeto',{ dadosForm: result, error: error });
                }else{        
                
                res.render('perfilViews', {nivel: dadosForm.nivel, usuario: usuario});
                }
            }); 
        });    
    }
}
module.exports.comparar = (app, req, res)=>{
    let dadosForm = req.body;
    
    if(dadosForm.opcao === dadosForm.resposta){
        
        req.session.nivel[0].jogonivel10 += 1;

        dadosForm.nivel = req.session.nivel;
        dadosForm.idusuario = req.session.idusuario;

        let usuario = req.session.usuario;
    
        const connection = app.config.dbConnection();
        const UsuariosDAO = new app.app.models.UsuariosDAO(connection);

        UsuariosDAO.inserirNivel10(dadosForm, (err, result) => {
            UsuariosDAO.jogoComparar(dadosForm, (err, result)=>{
                
                if(result.length > 0){
                    
                    res.render('jogos/jogoComparar',{ dadosForm: result });
                }else{
                            
                    res.render('perfilViews', {nivel: dadosForm.nivel, usuario: usuario});
                }
            }); 
        });
    }else{
        dadosForm.nivel = req.session.nivel;
        dadosForm.idusuario = req.session.idusuario;
        let usuario = req.session.usuario;
        let error = []; 
        error[0]= 'Reposta errada!';
    
        const connection = app.config.dbConnection();
        const UsuariosDAO = new app.app.models.UsuariosDAO(connection);

        UsuariosDAO.inserirNivel10(dadosForm, (err, result) => {
            UsuariosDAO.jogoComparar(dadosForm, (err, result)=>{

                if(result.length > 0){
                    
                    res.render('jogos/jogoComparar',{ dadosForm: result, error: error });
                }else{        
                
                res.render('perfilViews', {nivel: dadosForm.nivel, usuario: usuario});
                }
            }); 
        });
    }
}
module.exports.conta = (app, req, res)=>{
    let dadosForm = req.body;
    
    if(dadosForm.opcao === dadosForm.resposta){
        
        req.session.nivel[0].jogonivel9 += 1;

        dadosForm.nivel = req.session.nivel;
        dadosForm.idusuario = req.session.idusuario;

        let usuario = req.session.usuario;
    
        const connection = app.config.dbConnection();
        const UsuariosDAO = new app.app.models.UsuariosDAO(connection);

        UsuariosDAO.inserirNivel9(dadosForm, (err, result) => {
            UsuariosDAO.jogoConta(dadosForm, (err, result)=>{
                
                if(result.length > 0){
                    
                    res.render('jogos/jogoConta',{ dadosForm: result, error: {} });
                }else{
                            
                    res.render('perfilViews', {nivel: dadosForm.nivel, usuario: usuario});
                }
            }); 
        });
    }else{
        dadosForm.nivel = req.session.nivel;
        dadosForm.idusuario = req.session.idusuario;
        let usuario = req.session.usuario;
        let error = []; 
        error[0]= 'Reposta errada!';
    
        const connection = app.config.dbConnection();
        const UsuariosDAO = new app.app.models.UsuariosDAO(connection);

        UsuariosDAO.inserirNivel9(dadosForm, (err, result) => {
            UsuariosDAO.jogoConta(dadosForm, (err, result)=>{
        
                if(result.length > 0){
                    
                    res.render('jogos/jogoConta',{ dadosForm: result, error: error });
                }else{        
                
                res.render('perfilViews', {nivel: dadosForm.nivel, usuario: usuario});
                }
            }); 
        });
    }
}
module.exports.frases = (app, req, res)=>{
    let dadosForm = req.body; 
    if(dadosForm.opcao === dadosForm.resposta){
        
        req.session.nivel[0].jogonivel8 += 1;
        
        dadosForm.nivel = req.session.nivel;
        dadosForm.idusuario = req.session.idusuario;
        let usuario = req.session.usuario;
    
        const connection = app.config.dbConnection();
        const UsuariosDAO = new app.app.models.UsuariosDAO(connection);

        UsuariosDAO.inserirNivel8(dadosForm, (err, result) => {
            UsuariosDAO.jogoFrases(dadosForm, (err, result)=>{
                
                if(result.length > 0){
                    
                    res.render('jogos/jogoFrases',{ dadosForm: result, error: {} });
                }else{        
                
                res.render('perfilViews', {nivel: dadosForm.nivel, usuario: usuario});
                }
            }); 
        });
    }else{
        dadosForm.nivel = req.session.nivel;
        dadosForm.idusuario = req.session.idusuario;
        let usuario = req.session.usuario;
        let error = []; 
        error[0]= 'Reposta errada!';
    
        const connection = app.config.dbConnection();
        const UsuariosDAO = new app.app.models.UsuariosDAO(connection);

        UsuariosDAO.inserirNivel8(dadosForm, (err, result) => {
            UsuariosDAO.jogoFrases(dadosForm, (err, result)=>{
        
                if(result.length > 0){
                    
                    res.render('jogos/jogoFrases',{ dadosForm: result, error: error });
                }else{        
                
                res.render('perfilViews', {nivel: dadosForm.nivel, usuario: usuario});
                }
            }); 
        });
    }
}