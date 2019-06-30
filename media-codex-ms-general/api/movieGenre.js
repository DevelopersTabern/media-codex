const express = require('express');
const router = express.Router();
const connection = require('../dao/connection');

/* GET ALL MOVIE GENRE */
router.get('/movieGenre', (req, res) => {
    const query = 'SELECT * FROM MovieGenre';
    connection.query(query, (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send(rows);
        }
    })
});

/* GET MOVIE GENRE BY ID */
router.get('/movieGenre/:id', (req, res) => {
    const query = 'SELECT * FROM MovieGenre WHERE id = ?';
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

/* SAVE MOVIE GENRE */
router.post('/movieGenre', (req, res) => {
    const query = 'INSERT INTO MovieGenre(id, name) VALUES(?, ?)';
    const id = req.body.id;
    const name = req.body.name;

    connection.query(query, [id, name], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send('Genero agregado');
        }
    })
});

/* UPDATE MOVIE GENRE */
router.put('/movieGenre/:id', (req, res) => {
    const query = 'UPDATE MovieGenre SET name = ? WHERE id = ?';
    const id = req.params.id;
    const name = req.body.name;

    connection.query(query, [name, id], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send('Genero actualizado');
        }
    })
});

/* DELETE MOVIE GENRE */
router.delete('/movieGenre/:id', (req, res) => {
    const query = 'DELETE FROM MovieGenre WHERE id = ?';
    const id = req.params.id;

    connection.query(query, [id], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send('Genero eliminado');
        }
    })
});

module.exports = router;