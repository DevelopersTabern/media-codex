const express = require('express');
const router = express.Router();
const connection = require('../dao/connection');

/* GET ALL USER */
router.get('/user', (req, res) => { 
    const query = 'SELECT * FROM User';
    connection.query(query, (err, rows) => {
        if(err) {
            res.send({msg: 'Ha ocurrido un error', err});
        }
        else {
            res.send(rows);
        }
    })
});

/* GET USER BY ID */
router.get('/user/:id', (req, res) => {
    const query = 'SELECT * FROM User WHERE id = ?';
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

/* SAVE USER */
router.post('/user', (req, res) => {
    const query = 'INSERT INTO User(userName, password, firstName, lastName, email, address) VALUES(?,?,?,?,?,?)';

    const userName = req.body.userName;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const address = req.body.address;

    connection.query(query, [userName, password, firstName, lastName, email, address], (err, rows) => {
        if(err) {
            res.send({msg: 'Ha ocurrido un error', err});
        }
        else {
            res.send('Usuario creado');
        }
    })
});

/* UPDATE USER */
router.put('/user/:id', (req, res) => {
    const query = 'UPDATE User SET userName = ?, password = ?, firstName = ?, lastName = ?, email = ?, address = ? WHERE id = ?';
    const id = req.params.id;
    const userName = req.body.userName;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const address = req.body.address;

    connection.query(query, [userName, password, firstName, lastName, email, address, id], (err, rows) => {
        if(err) {
            res.send({msg: 'Ha ocurrido un error', err});
        }
        else {
            res.send('Usuario editado');
        }
    })
});

/* DELETE USER */
router.delete('/user/:id', (req, res) => {
    const query = 'DELETE FROM User WHERE id = ?';
    const id = req.params.id;

    connection.query(query, [id], (err, rows) => {
        if(err) {
            res.send({msg: 'Ha ocurrido un error', err});
        }
        else {
            res.send('Usuario eliminado');
        }
    })
});

module.exports = router;