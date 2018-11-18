USE newtcc;
CREATE TABLE jogofruta(
    idjogofruta INT PRIMARY KEY AUTO_INCREMENT,
    nomeimg VARCHAR(30) NOT NULL UNIQUE,
    resposta ENUM('1', '2', '3') NOT NULL,
    opcao1 VARCHAR(30) NOT NULL,
    opcao2 VARCHAR(30) NOT NULL,
    opcao3 VARCHAR(30) NOT NULL,
    autor VARCHAR(50) NOT NULL
);