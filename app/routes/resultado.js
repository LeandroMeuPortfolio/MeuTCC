module.exports = (app)=>{
    app.post('/resultadoFruta', (req, res)=>{
        app.app.controllers.resultado.fruta(app, req, res);
    });
    app.post('/resultadoComparar', (req, res)=>{
        app.app.controllers.resultado.comparar(app, req, res);
    });
    app.post('/resultadoConta', (req, res)=>{
        app.app.controllers.resultado.conta(app, req, res);
    });
    app.post('/resultadoFrases', (req, res)=>{
        app.app.controllers.resultado.frases(app, req, res);
    });
    app.post('/resultadoObjeto', (req, res)=>{
        app.app.controllers.resultado.objeto(app, req, res);
    });
}