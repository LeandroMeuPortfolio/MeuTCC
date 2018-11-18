function UsuariosDAO (connection){
    this._connection = connection;
}
//INSERT

UsuariosDAO.prototype.inserir = function(dadosForm, callback){   
    let queryInsert = 'INSERT INTO usuarios SET nome = ?, email = ?, senha = ?, sexo = ?, nascimento = ?';
    this._connection.query(queryInsert,[dadosForm.nome, dadosForm.email, dadosForm.senha, dadosForm.sexo, dadosForm.nascimento], callback);
}

UsuariosDAO.prototype.inserirAdm = function(dadosForm, callback){    
    let queryInsert = 'INSERT INTO adm SET nome = ?, email = ?, senha = ?, sexo = ?, nivel = ?, nascimento = ?';
    this._connection.query(queryInsert,[dadosForm.nome, dadosForm.email, dadosForm.senha, dadosForm.sexo,'3', dadosForm.nascimento], callback);
}

UsuariosDAO.prototype.cadastrarNivel = function(dadosForm, callback){
    let queryInsert = 'INSERT INTO nivel SET id_usuario = ?';    
    this._connection.query(queryInsert,dadosForm[0].idusuario,callback);
}

UsuariosDAO.prototype.cadastrarEndereco = function(dadosForm, endereco, callback){
    let queryInsert = 'INSERT INTO endereco SET id_usuario = ?, cep = ?, logradouro = ?, complemento = ?, bairro = ?, localidade = ?, uf = ?, unidade = ?, ibge = ?, gia = ?';
    this._connection.query(queryInsert,[dadosForm[0].idusuario, endereco.cep, endereco.logradouro, endereco.complemento, endereco.bairro, endereco.localidade, endereco.uf, endereco.unidade, endereco.ibge, endereco.gia],callback);
}
//Cadastrar Fruta
UsuariosDAO.prototype.cadastrarFruta = function(dadosForm, callback){
    let queryInsert = 'INSERT INTO jogofruta SET nomeimg = ?, resposta = ?, opcao1 = ?, opcao2 = ?, opcao3 = ?, autor = ?';
    this._connection.query(queryInsert,[dadosForm.nomeimg, dadosForm.resposta, dadosForm.opcao1, dadosForm.opcao2, dadosForm.opcao3, dadosForm.autor],callback);
}
//Cadastrar Objeto
UsuariosDAO.prototype.cadastrarObjeto = function(dadosForm, callback){
    let queryInsert = 'INSERT INTO jogoobjeto SET nomeimg = ?, resposta = ?, opcao1 = ?, opcao2 = ?, opcao3 = ?, autor = ?';
    this._connection.query(queryInsert,[dadosForm.nomeimg, dadosForm.resposta, dadosForm.opcao1, dadosForm.opcao2, dadosForm.opcao3, dadosForm.autor],callback);
}
//Cadastrar Frases
UsuariosDAO.prototype.cadastrarFrases = function(dadosForm, callback){
    let queryInsert = 'INSERT INTO jogofrases SET nomeimg = ?, resposta = ?, opcao1 = ?, opcao2 = ?, opcao3 = ?, autor = ?';
    this._connection.query(queryInsert,[dadosForm.nomeimg, dadosForm.resposta, dadosForm.opcao1, dadosForm.opcao2, dadosForm.opcao3, dadosForm.autor],callback);
}
//Cadastrar Conta
UsuariosDAO.prototype.cadastrarConta = function(dadosForm, callback){
    let queryInsert = 'INSERT INTO jogoconta SET numero1 = ?, numero2 = ?, sinal = ?, resposta = ?, opcao1 = ?, opcao2 = ?, opcao3 = ?, autor = ?';
    this._connection.query(queryInsert,[dadosForm.numero1, dadosForm.numero2, dadosForm.sinal, dadosForm.resposta, dadosForm.opcao1, dadosForm.opcao2, dadosForm.opcao3, dadosForm.autor],callback);
}
//Cadastrar Comparar
UsuariosDAO.prototype.cadastrarComparar = function(dadosForm, callback){
    let queryInsert = 'INSERT INTO jogocomparar SET numero1 = ?, numero2 = ?, resposta = ?, opcao1 = ?, opcao2 = ?, opcao3 = ?, autor = ?';
    this._connection.query(queryInsert,[dadosForm.numero1, dadosForm.numero2, dadosForm.resposta, dadosForm.opcao1, dadosForm.opcao2, dadosForm.opcao3, dadosForm.autor],callback);
}
//UPDATE FRUTA
UsuariosDAO.prototype.inserirNivel1 = function(dadosForm, callback){
    let queryInsert = 'UPDATE nivel SET jogonivel1 = ? WHERE id_usuario = ?';     
    this._connection.query(queryInsert,[dadosForm.nivel[0].jogonivel1, dadosForm.idusuario],callback);
}

UsuariosDAO.prototype.zerarFruta = function(dadosForm, nivel, callback){
    let queryInsert = 'UPDATE nivel SET jogonivel1 = ? WHERE id_usuario = ?';       
    this._connection.query(queryInsert,[nivel[0].jogonivel1 , dadosForm[0].idusuario],callback);
}

//UPDATE OBJETO
UsuariosDAO.prototype.inserirNivel2 = function(dadosForm, callback){
    let queryInsert = 'UPDATE nivel SET jogonivel2 = ? WHERE id_usuario = ?';     
    this._connection.query(queryInsert,[dadosForm.nivel[0].jogonivel2, dadosForm.idusuario],callback);
}

UsuariosDAO.prototype.zerarComparar = function(dadosForm, nivel, callback){
    let queryInsert = 'UPDATE nivel SET jogonivel8 = ? WHERE id_usuario = ?'; 
    this._connection.query(queryInsert,[nivel[0].jogonivel8, dadosForm.idusuario],callback);
}

//UPDATE FRASES

UsuariosDAO.prototype.inserirNivel8 = function(dadosForm, callback){
    let queryInsert = 'UPDATE nivel SET jogonivel8 = ? WHERE id_usuario = ?'; 
    this._connection.query(queryInsert,[dadosForm.nivel[0].jogonivel8, dadosForm.idusuario],callback);
}

UsuariosDAO.prototype.zerarFrases = function(dadosForm, nivel, callback){
    let queryInsert = 'UPDATE nivel SET jogonivel8 = ? WHERE id_usuario = ?'; 
    this._connection.query(queryInsert,[nivel[0].jogonivel8, dadosForm.idusuario],callback);
}

//UPDATE CONTA 

UsuariosDAO.prototype.inserirNivel9 = function(dadosForm, callback){
    let queryInsert = 'UPDATE nivel SET jogonivel9 = ? WHERE id_usuario = ?'; 
    this._connection.query(queryInsert,[dadosForm.nivel[0].jogonivel9, dadosForm.idusuario],callback);
}

UsuariosDAO.prototype.zerarConta = function(dadosForm, nivel, callback){
    let queryInsert = 'UPDATE nivel SET jogonivel9 = ? WHERE id_usuario = ?'; 
    this._connection.query(queryInsert,[nivel[0].jogonivel9, dadosForm.idusuario],callback);
}

// UPDATE COMPARAR
UsuariosDAO.prototype.inserirNivel10 = function(dadosForm, callback){
    let queryInsert = 'UPDATE nivel SET jogonivel10 = ? WHERE id_usuario = ?'; 
    this._connection.query(queryInsert,[dadosForm.nivel[0].jogonivel10, dadosForm.idusuario],callback);
}

UsuariosDAO.prototype.zerarComparar = function(dadosForm, nivel, callback){
    let queryInsert = 'UPDATE nivel SET jogonivel10 = ? WHERE id_usuario = ?'; 
    this._connection.query(queryInsert,[nivel[0].jogonivel10, dadosForm.idusuario],callback);
}

//SELECT
UsuariosDAO.prototype.autenticar = function(dadosForm, callback){
    let queryInsert = "SELECT * FROM usuarios WHERE email = ? and senha = ?";
    this._connection.query(queryInsert,[dadosForm.email, dadosForm.senha],callback);
}

UsuariosDAO.prototype.nivel = function(dadosForm, callback){
    let queryInsert = "SELECT * FROM nivel WHERE id_usuario = ? ";
    this._connection.query(queryInsert, dadosForm[0].idusuario,callback);
}

UsuariosDAO.prototype.jogoFruta = function(dadosForm, callback){    
    let queryInsert = "SELECT * FROM jogofruta WHERE idjogofruta > ? limit 1";
    this._connection.query(queryInsert,dadosForm.nivel[0].jogonivel1,callback);
}

UsuariosDAO.prototype.jogoObjeto = function(dadosForm, callback){    
    let queryInsert = "SELECT * FROM jogoobjeto WHERE idjogoobjeto > ? limit 1";
    this._connection.query(queryInsert,dadosForm.nivel[0].jogonivel2,callback);
}

UsuariosDAO.prototype.jogoFrases = function(dadosForm, callback){    
    let queryInsert = "SELECT * FROM jogofrases WHERE idjogofrase > ? limit 1";
    this._connection.query(queryInsert, dadosForm.nivel[0].jogonivel8, callback);
}

UsuariosDAO.prototype.jogoConta = function(dadosForm, callback){
    let queryInsert = "SELECT * FROM jogoconta WHERE idjogoconta > ? limit 1";
    this._connection.query(queryInsert,dadosForm.nivel[0].jogonivel9,callback);
}

UsuariosDAO.prototype.jogoComparar = function(dadosForm, callback){
    let queryInsert = "SELECT * FROM jogocomparar WHERE idjogocomparar > ? limit 1";
    this._connection.query(queryInsert,dadosForm.nivel[0].jogonivel10,callback);
}

module.exports = () => {
    return UsuariosDAO;
}
