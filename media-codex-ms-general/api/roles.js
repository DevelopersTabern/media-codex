const express = require('express');
const router = express.Router();
const connection = require('../dao/connection');

/* GET ALL ROLES */
router.get('/roles', (req, res) => { 
    const query = 'SELECT * FROM Roles';
    connection.query(query, (err, rows) => {
        if(err) {
            res.send({msg: 'Ha ocurrido un error', err});
        }
        else {
            res.send(rows);
        }
    })
});

/* GET ROLES BY ID */
router.get('/roles/:id', (req, res) => {
    const query = 'SELECT * FROM Roles WHERE id = ?';
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

/* SAVE ROLES */
router.post('/roles', (req, res) => {
    const query = 'INSERT INTO Roles(name) VALUES(?)';
    const name = req.body.name;

    connection.query(query, [name], (err, rows) => {
        if(err) {
            res.send({msg: 'Ha ocurrido un error', err});
        }
        else {
            res.send('Rol agregado');
        }
    })
});

/* UPDATE ROLES */
router.put('/roles/:id', (req, res) => {
    const query = 'UPDATE Roles SET name = ? WHERE id = ?';
    const id = req.params.id;
    const name = req.body.name;

    connection.query(query, [name, id], (err, rows) => {
        if(err) {
            res.send({msg: 'Ha ocurrido un error', err});
        }
        else {
            res.send('Rol actualizado');
        }
    })
});

/* DELETE ROLES */
router.delete('/roles/:id', (req, res) => {
    const query = 'DELETE FROM Roles WHERE id = ?';
    const id = req.params.id;

    connection.query(query, [id], (err, rows) => {
        if(err) {
            res.send({msg: 'Ha ocurrido un error', err});
        }
        else {
            res.send('Rol eliminado');
        }
    })
});

module.exports = router;