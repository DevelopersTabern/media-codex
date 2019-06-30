const express = require('express');
const router = express.Router();
const connection = require('../dao/connection');

/* GET ALL COMPANIES */
router.get('/companies', (req, res) => {
    const query = 'SELECT * FROM Companies';
    connection.query(query, (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send(rows);
        }
    })
});

/* GET COMPANY BY ID */
router.get('/companies/:id', (req, res) => {
    const query = 'SELECT * FROM Companies WHERE id = ?';
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

/* SAVE COMPANY */
router.post('/companies', (req, res) => {
    const query = 'INSERT INTO Companies(id, name) VALUES(?,?)';
    const id = req.body.id;
    const name = req.body.name;

    connection.query(query, [id, name], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send('Compañia creada');
        }
    })
});

/* UPDATE COMPANY */
router.put('/companies/:id', (req, res) => {
    const query = 'UPDATE Companies SET name = ? WHERE id = ?';
    const id = req.params.id;
    const name = req.body.name;

    connection.query(query, [name, id], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send('Compañia actualizada');
        }
    })
});

/* DELETE COMPANY */
router.delete('/companies/:id', (req, res) => {
    const query = 'DELETE FROM Companies WHERE id = ?';
    const id = req.params.id;

    connection.query(query, [id], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send('Compañia eliminada');
        }
    })
});

module.exports = router;