const express = require('express');
const router = express.Router();
const connection = require('../dao/connection');

/* GET ALL LANGUAGES */
router.get('/languages', (req, res) => {
    const query = 'SELECT * FROM Languages';
    connection.query(query, (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send(rows);
        }
    })
});

/* GET LANGUAGES BY ID */
router.get('/languages/:id', (req, res) => {
    const query = 'SELECT * FROM Languages WHERE id = ?';
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

/* SAVE LANGUAGES */
router.post('/languages', (req, res) => {
    const query = 'INSERT INTO Languages(id, name) VALUES(?,?)';
    const id = req.body.id;
    const name = req.body.name;

    connection.query(query, [id, name], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send('Lenguaje agregado');
        }
    })
});

/* UPDATE LANGUAGES */
router.put('/languages/:id', (req, res) => {
    const query = 'UPDATE Languages SET name = ? WHERE id = ?';
    const id = req.params.id;
    const name = req.body.name;

    connection.query(query, [name, id], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send('Lenguaje actualizado');
        }
    })
});

/* DELETE LANGUAGES */
router.delete('/languages/:id', (req, res) => {
    const query = 'DELETE FROM Languages WHERE id = ?';
    const id = req.params.id;

    connection.query(query, [id], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send('Lenguaje eliminado');
        }
    })
});

module.exports = router;