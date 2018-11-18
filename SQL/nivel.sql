USE newtcc;
CREATE TABLE nivel(
    idnivel INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT UNIQUE NOT NULL,
    jogonivel1 INT DEFAULT 0,
    jogoerros1 INT DEFAULT 0,
    jogonivel2 INT DEFAULT 0,
    jogoerros2 INT DEFAULT 0,
    jogonivel3 INT DEFAULT 0,
    jogoerros3 INT DEFAULT 0,
    jogonivel4 INT DEFAULT 0,
    jogoerros4 INT DEFAULT 0,
    jogonivel5 INT DEFAULT 0,
    jogoerros5 INT DEFAULT 0,
    jogonivel6 INT DEFAULT 0,
    jogoerros6 INT DEFAULT 0,
    jogonivel7 INT DEFAULT 0,
    jogoerros7 INT DEFAULT 0,
    jogonivel8 INT DEFAULT 0,
    jogoerros8 INT DEFAULT 0,
    jogonivel9 INT DEFAULT 0,
    jogoerros9 INT DEFAULT 0,
    jogonivel10 INT DEFAULT 0,
    jogoerros10 INT DEFAULT 0,

    FOREIGN KEY(id_usuario)
    REFERENCES usuarios(idusuario)
);