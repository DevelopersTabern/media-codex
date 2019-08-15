DROP DATABASE IF EXISTS MediaCodex;
CREATE DATABASE MediaCodex CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE MediaCodex;

CREATE TABLE User(
	id INT AUTO_INCREMENT,
	userName VARCHAR(20) NOT NULL,
	password VARCHAR(20) NOT NULL,
	firstName VARCHAR(20) NOT NULL,
	lastName VARCHAR(20) NOT NULL,
	email VARCHAR(50) NOT NULL,
	address VARCHAR(50) NOT NULL,
PRIMARY KEY(id));


CREATE TABLE Companies(
	id INT,
	name VARCHAR(80) NOT NULL,
PRIMARY KEY(id));


CREATE TABLE Genre(
	id INT,
	name VARCHAR(30) NOT NULL,
PRIMARY KEY(id));


CREATE TABLE Languages(
	iso_639_1 VARCHAR(10),
	name VARCHAR(20) NOT NULL,
PRIMARY KEY(iso_639_1));


CREATE TABLE Countries(
	iso_3166_1 VARCHAR(10),
	name VARCHAR(40) NOT NULL,
PRIMARY KEY(iso_3166_1)); 


CREATE TABLE Roles(
	id INT AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
PRIMARY KEY(id));


CREATE TABLE Casting(
	id INT AUTO_INCREMENT,
	firstName VARCHAR(20) NOT NULL,
	lastName VARCHAR(20) NOT NULL,
PRIMARY KEY(id));


CREATE TABLE Type(
	id INT AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
PRIMARY KEY(id));


CREATE TABLE Media(
	id INT,
	name VARCHAR(50) NOT NULL,
PRIMARY KEY(id));
    
CREATE TABLE Rating(
	id INT AUTO_INCREMENT PRIMARY KEY,
	idMedia INT,
    idUser INT,
    rating INT NOT NULL,
FOREIGN KEY(idMedia) REFERENCES Media(id),
FOREIGN KEY(idUser) REFERENCES User(id));


CREATE TABLE RolesCast(
	id INT AUTO_INCREMENT PRIMARY KEY,
    idRoles INT,
    idCast INT,
FOREIGN KEY(idRoles) REFERENCES Roles(id),
FOREIGN KEY(idCast) REFERENCES Casting(id));


CREATE TABLE MediaCountry(
	id INT AUTO_INCREMENT PRIMARY KEY,
    idMedia INT,
    id_iso_3166_1 VARCHAR(10),
FOREIGN KEY(idMedia) REFERENCES Media(id),
FOREIGN KEY(id_iso_3166_1) REFERENCES Countries(iso_3166_1));

CREATE TABLE MediaCast(
	id INT AUTO_INCREMENT PRIMARY KEY,
    idMedia INT,
    idCast INT,
FOREIGN KEY(idMedia) REFERENCES Media(id),
FOREIGN KEY(idCast) REFERENCES Casting(id));


CREATE TABLE MediaType(
	id INT AUTO_INCREMENT PRIMARY KEY,
    idMedia INT,
    idType INT,
FOREIGN KEY(idMedia) REFERENCES Media(id),
FOREIGN KEY(idType) REFERENCES Type(id));
    

CREATE TABLE MediaCompany(
	id INT AUTO_INCREMENT PRIMARY KEY,
    idMedia INT,
    idCompany INT,
FOREIGN KEY(idMedia) REFERENCES Media(id),
FOREIGN KEY(idCompany) REFERENCES Companies(id));


CREATE TABLE MediaLanguage(
	id INT AUTO_INCREMENT PRIMARY KEY,
    idMedia INT,
    id_iso_639_1 VARCHAR(10),
FOREIGN KEY(idMedia) REFERENCES Media(id),
FOREIGN KEY(id_iso_639_1) REFERENCES Languages(iso_639_1));


CREATE TABLE MediaGenre(
	id INT AUTO_INCREMENT PRIMARY KEY,
    idMedia INT,
    idGenre INT,
FOREIGN KEY(idMedia) REFERENCES Media(id),
FOREIGN KEY(idGenre) REFERENCES Genre(id));
