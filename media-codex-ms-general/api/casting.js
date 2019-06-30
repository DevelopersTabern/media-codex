const express = require('express');
const router = express.Router();
const connection = require('../dao/connection');

/* GET ALL CASTING */
router.get('/casting', (req, res) => { 
    const query = 'SELECT * FROM Casting';
    connection.query(query, (err, rows) => {
        if(err) {
            res.send({msg: 'Ha ocurrido un error', err});
        }
        else {
            res.send(rows);
        }
    })
});

/* GET CASTING BY ID */
router.get('/casting/:id', (req, res) => {
    const query = 'SELECT * FROM Casting WHERE id = ?';
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

/* SAVE CASTING */
router.post('/casting', (req, res) => {
    const query = 'INSERT INTO Casting(firstName, lastName, idRoles) VALUES(?,?,?)';
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const idRoles = req.body.idRoles;

    connection.query(query, [firstName,lastName,idRoles], (err, rows) => {
        if(err) {
            res.send({msg: 'Ha ocurrido un error', err});
        }
        else {
            res.send('Personaje agregado');
        }
    })
});

/* UPDATE CASTING */
router.put('/casting/:id', (req, res) => {
    const query = 'UPDATE Casting SET firstName = ?, lastName = ?, idRoles = ? WHERE id = ?';
    const id = req.params.id;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const idRoles = req.body.idRoles;

    connection.query(query, [firstName,lastName,idRoles,id], (err, rows) => {
        if(err) {
            res.send({msg: 'Ha ocurrido un error', err});
        }
        else {
            res.send('Personaje actualizado');
        }
    })
});

/* DELETE CASTING */
router.delete('/casting/:id', (req, res) => {
    const query = 'DELETE FROM Casting WHERE id = ?';
    const id = req.params.id;

    connection.query(query, [id], (err, rows) => {
        if(err) {
            res.send({msg: 'Ha ocurrido un error', err});
        }
        else {
            res.send('Personaje eliminado');
        }
    })
});

module.exports = router;