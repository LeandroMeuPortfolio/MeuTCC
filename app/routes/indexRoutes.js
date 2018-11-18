module.exports = (app) => {
    app.get('/', (req, res) => {
        app.app.controllers.indexControllers.index(app, req, res);
    });
    app.get('/adm', (req, res)=>{
        app.app.controllers.indexControllers.adm(app, req, res);
    });
    app.post('/perfil', (req, res)=>{
        app.app.controllers.indexControllers.perfil(app, req, res);
    });
}