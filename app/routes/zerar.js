module.exports = (app) => {
    app.post('/zerarFruta', (req, res) => {
        app.app.controllers.zerar.zerarFruta(app, req, res);
    });
    app.post('/zerarObejeto', (req, res) => {
        app.app.controllers.zerar.zerarObjeto(app, req, res);
    });
    app.post('/zerarFrases', (req, res) => {
        app.app.controllers.zerar.zerarFrases(app, req, res);
    });
    app.post('/zerarConta', (req, res) => {
        app.app.controllers.zerar.zerarConta(app, req, res);
    });
    app.post('/zerarComparar', (req, res) => {
        app.app.controllers.zerar.zerarComparar(app, req, res);
    });

}