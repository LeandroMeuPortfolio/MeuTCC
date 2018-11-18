module.exports.index = (app, req, res) =>{
    res.render('index',{error:{}});
}
module.exports.adm = (app, req, res) =>{
    res.render('adm',{error:{}});
}
module.exports.perfil = (app, req, res) =>{
    let usuario = req.session.usuario;
    let nivel = req.session.nivel;
    res.render('perfilViews',{usuario:usuario, nivel: nivel});
}