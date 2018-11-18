USE newtcc;
CREATE TABLE jogoconta(
    idjogoconta INT PRIMARY KEY AUTO_INCREMENT,
    numero1 INT NOT NULL,
    numero2 INT NOT NULL,
    sinal ENUM('+', '-', 'x', '/'),
    resposta ENUM('1', '2', '3'),
    opcao1 INT NOT NULL,
    opcao2 INT NOT NULL,
    opcao3 INT NOT NULL,
    autor VARCHAR(50)
);
INSERT INTO jogoconta set numero1 = 3, numero2 = 2, sinal = '+' , resposta = '3', opcao1 = 4, opcao2 = 6, opcao3 = 5; 