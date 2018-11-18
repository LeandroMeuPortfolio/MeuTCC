USE newtcc;
CREATE TABLE jogocomparar(
    idjogocomparar INT PRIMARY KEY AUTO_INCREMENT,
    numero1 INT NOT NULL,
    numero2 INT NOT NULL,
    resposta ENUM('1', '2', '3'),
    opcao1 ENUM('Maior >', 'Menor <', 'Igual ='),
    opcao2 ENUM('Maior >', 'Menor <', 'Igual ='),
    opcao3 ENUM('Maior >', 'Menor <', 'Igual ='),
    autor VARCHAR(50)
);
INSERT INTO jogocomparar SET numero1 = 7, numero2 = 6, resposta = '1', opcao1 = 'Maior >', opcao2 = 'Menor <', opcao3 = 'Igual =', autor = 'Leandro';
INSERT INTO jogocomparar SET numero1 = 6, numero2 = 7, resposta = '2', opcao1 = 'Maior >', opcao2 = 'Menor <', opcao3 = 'Igual =', autor = 'Leandro';
INSERT INTO jogocomparar SET numero1 = 6, numero2 = 6, resposta = '3', opcao1 = 'Maior >', opcao2 = 'Menor <', opcao3 = 'Igual =', autor = 'Leandro';