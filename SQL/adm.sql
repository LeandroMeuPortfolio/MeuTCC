USE newtcc;
CREATE TABLE adm(
    idadm INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(10) NOT NULL,
    sexo ENUM('m','f') NOT NULL,
    nivel ENUM('1','2','3') NOT NULL,
    nascimento DATE,
    cadastro DATE
);

 