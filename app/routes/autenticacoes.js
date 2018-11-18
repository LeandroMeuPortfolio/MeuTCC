module.exports = (app) => {
    app.post('/loginUsuario', (req, res) => {
        app.app.controllers.autenticar.loginUsuario(app, req, res);
    });
    app.post('/autenticarAdm', (req, res) => {
        app.app.controllers.autenticar.autenticarAdm(app, req, res);
    });
}
