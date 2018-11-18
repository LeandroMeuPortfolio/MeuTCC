//FRUTA
module.exports.jogoFruta = (app, req, res) => {
    let dadosForm = req.body;
    let usuario = req.session.usuario;
    const connection = app.config.dbConnection();
    const UsuariosDAO = new app.app.models.UsuariosDAO(connection);

    UsuariosDAO.cadastrarFruta(dadosForm, (err, result) => {
        res.render('criarJogo/criarJogoFruta',{usuario: usuario});
    });
}

module.exports.cadastrarFruta = (app, req, res) => {
    let dadosForm = req.body;
    
    app.set('GlobalNomeImagem', dadosForm.nomeimg);
    
    res.render('criarImg/criarImgFruta',{jogo:dadosForm})
}

module.exports.criarFruta = (app, req, res) =>{
    let usuario = req.session.usuario;
    
    res.render('criarJogo/criarJogoFruta',{usuario: usuario})
}
//OBJETO
module.exports.jogoObjeto = (app, req, res) => {
    let dadosForm = req.body;
    let usuario = req.session.usuario;

    const connection = app.config.dbConnection();
    const UsuariosDAO = new app.app.models.UsuariosDAO(connection);

    UsuariosDAO.cadastrarObjeto(dadosForm, (err, result) => {
        res.render('criarJogo/criarJogoObjeto', {usuario: usuario});
    });
}

module.exports.cadastrarObjeto = (app, req, res) => {
    let dadosForm = req.body;
    app.set('GlobalNomeImagem', dadosForm.nomeimg);    
    res.render('criarImg/criarImgObjeto',{jogo:dadosForm})
}

module.exports.criarObjeto = (app, req, res) =>{
    let usuario = req.session.usuario;
    res.render('criarJogo/criarJogoObjeto', {usuario: usuario});
}
//FRASES
module.exports.jogoFrases = (app, req, res) => {
    let dadosForm = req.body;
    let usuario = req.session.usuario;
    
    const connection = app.config.dbConnection();
    const UsuariosDAO = new app.app.models.UsuariosDAO(connection);

    UsuariosDAO.cadastrarFrases(dadosForm, (err, result) => {
        res.render('criarJogo/criarJogoFrases', {usuario: usuario});
    });
}

module.exports.cadastrarFrases = (app, req, res) => {
    let dadosForm = req.body;
    
    app.set('GlobalNomeImagem', dadosForm.nomeimg);    
    res.render('criarImg/criarImgFrases',{jogo:dadosForm})
}

module.exports.criarFrases = (app, req, res) =>{
    let usuario = req.session.usuario;
    res.render('criarJogo/criarJogoFrases', {usuario: usuario});
}
//CONTA

module.exports.cadastrarConta = (app, req, res) => {
    let dadosForm = req.body;
    let usuario = req.session.usuario;
    
    const connection = app.config.dbConnection();
    const UsuariosDAO = new app.app.models.UsuariosDAO(connection);

    UsuariosDAO.cadastrarConta(dadosForm, (err, result) => {
        res.render('criarJogo/criarJogoConta', {usuario: usuario});
    });
}

module.exports.criarConta = (app, req, res) =>{
    let usuario = req.session.usuario;
    res.render('criarJogo/criarJogoConta', {usuario: usuario})
}
//COMPARAR

module.exports.cadastrarComparar = (app, req, res) => {
    let dadosForm = req.body;
    let usuario = req.session.usuario;

    const connection = app.config.dbConnection();
    const UsuariosDAO = new app.app.models.UsuariosDAO(connection);

    UsuariosDAO.cadastrarComparar(dadosForm, (err, result) => {
        res.render('criarJogo/criarJogoComparar', {usuario: usuario});
    });
}

module.exports.criarComparar = (app, req, res) =>{
    let usuario = req.session.usuario;
    res.render('criarJogo/criarJogoComparar', {usuario: usuario})
}