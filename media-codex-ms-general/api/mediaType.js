const express = require('express');
const router = express.Router();
const connection = require('../dao/connection');

/* GET ALL MEDIA TYPE */
router.get('/mediaType', (req, res) => { 
    const query = 'SELECT * FROM MediaType';
    connection.query(query, (err, rows) => {
        if(err) {
            res.send({msg: 'Ha ocurrido un error', err});
        }
        else {
            res.send(rows);
        }
    })
});

/* GET MEDIA TYPE BY ID */
router.get('/mediaType/:id', (req, res) => {
    const query = 'SELECT * FROM MediaType WHERE id = ?';
    const id = req.params.id;

    connection.query(query, [id], (err, rows) => {
        if(err) {
            res.send({msg: 'Ha ocurrido un error', err});
        }
        else {
            res.send(rows);
        }
    })
});

/* SAVE MEDIA TYPE */
router.post('/mediaType', (req, res) => {
    const query = 'INSERT INTO MediaType(name) VALUES(?)';
    const name = req.body.name;

    connection.query(query, [name], (err, rows) => {
        if(err) {
            res.send({msg: 'Ha ocurrido un error', err});
        }
        else {
            res.send({ msg: 'Contenido multimedia creado'});
        }
    })
});

/* UPDATE MEDIA TYPE */
router.put('/mediaType/:id', (req, res) => {
    const query = 'UPDATE MediaType SET name = ? WHERE id = ?';
    const id = req.params.id;
    const name = req.body.name;

    connection.query(query, [name, id], (err, rows) => {
        if(err) {
            res.send({msg: 'Ha ocurrido un error', err});
        }
        else {
            res.send({ msg: 'Contenido multimedia actualizado'});
        }
    })
});

/* DELETE MEDIA TYPE */
router.delete('/mediaType/:id', (req, res) => {
    const query = 'DELETE FROM MediaType WHERE id = ?';
    const id = req.params.id;

    connection.query(query, [id], (err, rows) => {
        if(err) {
            res.send({msg: 'Ha ocurrido un error', err});
        }
        else {
            res.send({ msg: 'Contenido multimedia eliminado'});
        }
    })
});

module.exports = router;