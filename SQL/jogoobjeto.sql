USE newtcc;
CREATE TABLE jogoobjeto(
    idjogoobjeto INT PRIMARY KEY AUTO_INCREMENT,
    nomeimg VARCHAR(30) NOT NULL UNIQUE,
    resposta ENUM('1', '2', '3') NOT NULL,
    opcao1 VARCHAR(30) NOT NULL,
    opcao2 VARCHAR(30) NOT NULL,
    opcao3 VARCHAR(30) NOT NULL,
    autor VARCHAR(50) NOT NULL
);
INSERT INTO jogoobjeto SET nomeimg = 'bola', resposta = '3', opcao1 = 'Carrinho', opcao2 = 'Boneca', opcao3 = 'Bola', autor = 'Leandro';

INSERT INTO jogoobjeto SET nomeimg = 'boneca', resposta = '2', opcao1 = 'Carrinho', opcao2 = 'Boneca', opcao3 = 'Bola', autor = 'Leandro';

INSERT INTO jogoobjeto SET nomeimg = 'carrinho', resposta = '1', opcao1 = 'Carrinho', opcao2 = 'Boneca', opcao3 = 'Bola', autor = 'Leandro';