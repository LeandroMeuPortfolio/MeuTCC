USE newtcc;
CREATE TABLE usuarios(
    idusuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(10) NOT NULL,
    sexo ENUM('m','f') NOT NULL,
    nascimento DATE
);

 