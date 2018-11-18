module.exports = (app) =>{
    app.post('/jogarFruta', (req, res) => {
        app.app.controllers.jogoControllers.jogarFruta(app, req, res);
    });
    
    app.post('/jogarObjeto', (req, res) => {
        app.app.controllers.jogoControllers.jogarObjeto(app, req, res);
    });

    app.post('/jogarComparar', (req, res) => {
        app.app.controllers.jogoControllers.jogarComparar(app, req, res);
    });

    app.post('/jogarConta', (req, res) => {
        app.app.controllers.jogoControllers.jogarConta(app, req, res);
    });
    app.post('/jogarFrases', (req, res) => {
        app.app.controllers.jogoControllers.jogarFrases(app, req, res);
    });
}
