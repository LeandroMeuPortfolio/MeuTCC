module.exports = (app) => {
    app.post('/cadastrarUsuarios', (req, res) => {
        app.app.controllers.cadastrar.cadastrarUsuarios(app, req, res);
    });
    app.post('/cadastrarAdm', (req, res)=>{
        app.app.controllers.cadastrar.cadastrarAdm(app, req, res);
    });
}