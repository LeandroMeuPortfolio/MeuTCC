USE newtcc;
CREATE TABLE endereco(
    idendereco INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT UNIQUE,
    cep VARCHAR(10) NOT NULL,
    logradouro VARCHAR(100),
    complemento VARCHAR(100),
    bairro VARCHAR(50),
    localidade VARCHAR(50) NOT NULL, 
    uf CHAR(2) NOT NULL,
    unidade VARCHAR(50),
    ibge VARCHAR(50),
    gia VARCHAR(50),
    FOREIGN KEY(id_usuario)
    REFERENCES  usuarios(idusuario)
);
