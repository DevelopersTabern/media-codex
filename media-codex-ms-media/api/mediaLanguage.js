const express = require('express');
const router = express.Router();
const connection = require('../dao/connection');

/* SAVE MEDIALANGUAGE */
router.post('/mediaLanguage', (req, res) => {
    const query = 'INSERT INTO MediaLanguage(idMedia, id_iso_639_1) VALUES(?,?)';
    const idMedia = req.body.idMedia;
    const id_iso_639_1 = req.body.id_iso_639_1;

    connection.query(query, [idMedia, id_iso_639_1], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send({ msg: 'Elemento creado' });
        }
    })
});

module.exports = router;