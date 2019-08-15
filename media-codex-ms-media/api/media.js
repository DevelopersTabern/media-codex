const express = require('express');
const router = express.Router();
const connection = require('../dao/connection');

/* GET ALL MEDIA */
router.get('/media', (req, res) => {
    const query = 'SELECT * FROM Media';
    connection.query(query, (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send(rows);
        }
    })
});

/* GET MEDIA BY ID */
router.get('/media/:id', (req, res) => {
    const query = 'SELECT * FROM Media WHERE id = ?';
    const id = req.params.id;

    connection.query(query, [id], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send(rows);
        }
    })
});

/* GET MEDIA BY GENRE ID */
router.get('/mediaGenre/:id', (req, res) => {
    const query = 'SELECT * FROM Media WHERE id IN (SELECT idMedia FROM MediaGenre WHERE idGenre=?);';
    const id = req.params.id;

    connection.query(query, [id], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send(rows);
        }
    })
});

/* GET MEDIA BY COMPANY ID */
router.get('/mediaCompany/:id', (req, res) => {
    const query = 'SELECT * FROM Media WHERE id IN (SELECT idMedia FROM MediaCompany WHERE idCompany=?);';
    const id = req.params.id;

    connection.query(query, [id], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send(rows);
        }
    })
});


/* GET MEDIA BY COUNTRY ID */
router.get('/mediaCountry/:id', (req, res) => {
    const query = 'SELECT * FROM Media WHERE id IN (SELECT idMedia FROM MediaCountry WHERE id_iso_3166_1=?);';
    const id = req.params.id;

    connection.query(query, [id], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send(rows);
        }
    })
});

/* GET MEDIA BY LANGUAGE ID */
router.get('/mediaLanguage/:id', (req, res) => {
    const query = 'SELECT * FROM Media WHERE id IN (SELECT idMedia FROM MediaLanguage WHERE id_iso_639_1=?);';
    const id = req.params.id;

    connection.query(query, [id], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send(rows);
        }
    })
});


/* SAVE MEDIA */
router.post('/media', (req, res) => {
    const query = 'INSERT INTO Media(id, name) VALUES(?,?)';
    const id = req.body.id;
    const name = req.body.name;

    connection.query(query, [id, name], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send({ msg: 'Contenido multimedia creado' });
        }
    })
});


/* UPDATE MEDIA */
router.put('/media/:id', (req, res) => {
    const query = 'UPDATE Media SET name = ? WHERE id = ?';
    const id = req.params.id;
    const name = req.body.name;

    connection.query(query, [name, id], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send({ msg: 'Contenido multimedia actualizado' });
        }
    })
});

/* DELETE MEDIA */
router.delete('/media/:id', (req, res) => {
    const query = 'DELETE FROM Media WHERE id = ?';
    const id = req.params.id;

    connection.query(query, [id], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send({ msg: 'Contenido multimedia eliminado' });
        }
    })
});

module.exports = router;