const express = require('express');
const router = express.Router();
const connection = require('../dao/connection');

/* GET ALL COUNTRIES */
router.get('/countries', (req, res) => {
    const query = 'SELECT * FROM Countries';
    connection.query(query, (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send(rows);
        }
    })
});

/* GET COUNTRIES BY ID */
router.get('/countries/:id', (req, res) => {
    const query = 'SELECT * FROM Countries WHERE id = ?';
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

/* SAVE COUNTRIES */
router.post('/countries', (req, res) => {
    const query = 'INSERT INTO Countries(id, name) VALUES(?,?)';
    const id = req.body.id;
    const name = req.body.name;

    connection.query(query, [id, name], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send('Pais agregado');
        }
    })
});

/* UPDATE COUNTRIES */
router.put('/countries/:id', (req, res) => {
    const query = 'UPDATE Countries SET name = ? WHERE id = ?';
    const id = req.params.id;
    const name = req.body.name;

    connection.query(query, [name, id], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send('Pais actualizado');
        }
    })
});

/* DELETE COUNTRIES */
router.delete('/countries/:id', (req, res) => {
    const query = 'DELETE FROM Countries WHERE id = ?';
    const id = req.params.id;

    connection.query(query, [id], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send('Pais eliminado');
        }
    })
});

module.exports = router;