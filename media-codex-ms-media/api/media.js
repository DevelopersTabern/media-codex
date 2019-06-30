const express = require('express');
const router = express.Router();
const connection = require('../dao/connection');

/* GET ALL MEDIA */
router.get('/media', (req, res) => { 
    const query = 'SELECT * FROM Media';
    connection.query(query, (err, rows) => {
        if(err) {
            res.send({msg: 'Ha ocurrido un error', err});
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
        if(err) {
            res.send({msg: 'Ha ocurrido un error', err});
        }
        else {
            res.send(rows);
        }
    })
});


/* SAVE MEDIA */
router.post('/media', (req, res) => {
    const query = 'INSERT INTO Media(name, idGenre, idCompany, idLanguage, idCountry, idCasting, idMediaType) VALUES(?,?,?,?,?,?,?)';
    const name = req.body.name;
    const idGenre = req.body.idGenre;
    const idCompany = req.body.idCompany;
    const idLanguage = req.body.idLanguage;
    const idCountry = req.body.idCountry;
    const idCasting = req.body.idCasting;
    const idMediaType = req.body.idMediaType;

    connection.query(query, [name, idGenre, idCompany, idLanguage, idCountry, idCasting, idMediaType], (err, rows) => {
        if(err) {
            res.send({msg: 'Ha ocurrido un error', err});
        }
        else {
            res.send('Contenido multimedia creado');
        }
    })
});


/* UPDATE MEDIA */
router.put('/media/:id', (req, res) => {
    const query = 'UPDATE Media SET name = ?, idGenre = ?, idCompany = ?, idLanguage = ?, idCountry = ?, idCasting = ?, idMediaType = ? WHERE id = ?';
    const id = req.params.id;
    const name = req.body.name;
    const idGenre = req.body.idGenre;
    const idCompany = req.body.idCompany;
    const idLanguage = req.body.idLanguage;
    const idCountry = req.body.idCountry;
    const idCasting = req.body.idCasting;
    const idMediaType = req.body.idMediaType;

    connection.query(query, [name, idGenre, idCompany, idLanguage, idCountry, idCasting, idMediaType, id], (err, rows) => {
        if(err) {
            res.send({msg: 'Ha ocurrido un error', err});
        }
        else {
            res.send('Contenido multimedia actualizado');
        }
    })
});

/* DELETE MEDIA */
router.delete('/media/:id', (req, res) => {
    const query = 'DELETE FROM Media WHERE id = ?';
    const id = req.params.id;

    connection.query(query, [id], (err, rows) => {
        if(err) {
            res.send({msg: 'Ha ocurrido un error', err});
        }
        else {
            res.send('Contenido multimedia eliminado');
        }
    })
});

module.exports = router;