CREATE DATABASE IF NOT EXISTS drivedex;

USE drivedex;

CREATE TABLE fabricantes (
    id_fabricante   INT             NOT NULL AUTO_INCREMENT,
    nombre          VARCHAR(255)    NOT NULL,
    pais            VARCHAR(50),
    PRIMARY KEY     (id_fabricante)
);

CREATE TABLE categorias (
    id_categoria    INT             NOT NULL AUTO_INCREMENT,
    nombre          VARCHAR(255)    NOT NULL,
    PRIMARY KEY     (id_categoria)
);

CREATE TABLE modelos (
    id_modelo       INT             NOT NULL AUTO_INCREMENT,
    nombre          VARCHAR(255)    NOT NULL,
    fk_id_fabricante INT            NOT NULL,
    fk_id_categoria INT             NOT NULL,
    PRIMARY KEY     (id_modelo),
    FOREIGN KEY     (fk_id_fabricante) REFERENCES fabricantes(id_fabricante),
    FOREIGN KEY     (fk_id_categoria) REFERENCES categorias(id_categoria)
);

CREATE TABLE especificaciones (
    id_especificacion INT           NOT NULL AUTO_INCREMENT,
    nombre            VARCHAR(255)  NOT NULL,
    valor            VARCHAR(255),
    fk_id_modelo     INT           NOT NULL,
    PRIMARY KEY       (id_especificacion),
    FOREIGN KEY       (fk_id_modelo) REFERENCES modelos(id_modelo)
);