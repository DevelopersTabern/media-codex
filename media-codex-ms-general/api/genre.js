const express = require('express');
const router = express.Router();
const connection = require('../dao/connection');

/* GET ALL GENRE */
router.get('/genre', (req, res) => {
    const query = 'SELECT * FROM Genre';
    connection.query(query, (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send(rows);
        }
    })
});

/* GET GENRE BY ID */
router.get('/genre/:id', (req, res) => {
    const query = 'SELECT * FROM Genre WHERE id = ?';
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

/* SAVE GENRE */
router.post('/genre', (req, res) => {
    const query = 'INSERT INTO Genre(id, name) VALUES(?, ?)';
    const id = req.body.id;
    const name = req.body.name;

    connection.query(query, [id, name], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send({ msg: 'Genero agregado'});
        }
    })
});

/* UPDATE GENRE */
router.put('/genre/:id', (req, res) => {
    const query = 'UPDATE Genre SET name = ? WHERE id = ?';
    const id = req.params.id;
    const name = req.body.name;

    connection.query(query, [name, id], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send({ msg: 'Genero actualizado'});
        }
    })
});

/* DELETE GENRE */
router.delete('/genre/:id', (req, res) => {
    const query = 'DELETE FROM Genre WHERE id = ?';
    const id = req.params.id;

    connection.query(query, [id], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send({ msg: 'Genero eliminado'});
        }
    })
});

module.exports = router;