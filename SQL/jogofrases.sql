USE newtcc;
CREATE TABLE jogofrases(
    idjogofrase INT PRIMARY KEY AUTO_INCREMENT,
    nomeimg VARCHAR(20) NOT NULL UNIQUE,
    resposta ENUM('1', '2', '3'),
    opcao1 VARCHAR(500),
    opcao2 VARCHAR(500),
    opcao3 VARCHAR(500),
    autor VARCHAR(30)
);
INSERT INTO jogofrases set nomeimg = 'balanco', resposta = '1', opcao1 = 'O menino está brincando no balanço.', opcao2 = 'O menino está brincando no escorrego.', opcao3 = 'O menino está brincando no pula-pula.', autor = 'leandro';

INSERT INTO jogofrases set nomeimg = 'escorrego', resposta = '2', opcao1 = 'As crianças estão brincando no balanço.', opcao2 = 'As crianças estão brincando no escorrego.', opcao3 = 'As crianças estão brincando no pula-pula.', autor = 'leandro';