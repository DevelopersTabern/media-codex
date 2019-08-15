const express = require('express');
const router = express.Router();
const connection = require('../dao/connection');

/* SAVE MEDIACOMPANY */
router.post('/mediaCompany', (req, res) => {
    const query = 'INSERT INTO MediaCompany(idMedia, idCompany) VALUES(?,?)';
    const idMedia = req.body.idMedia;
    const idCompany = req.body.idCompany;

    connection.query(query, [idMedia, idCompany], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send({ msg: 'Elemento creado' });
        }
    })
});

module.exports = router;