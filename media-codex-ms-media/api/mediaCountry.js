const express = require('express');
const router = express.Router();
const connection = require('../dao/connection');

/* SAVE MEDIACOUNTRY */
router.post('/mediaCountry', (req, res) => {
    const query = 'INSERT INTO MediaCountry(idMedia, id_iso_3166_1) VALUES(?,?)';
    const idMedia = req.body.idMedia;
    const id_iso_3166_1 = req.body.id_iso_3166_1;

    connection.query(query, [idMedia, id_iso_3166_1], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send({ msg: 'Elemento creado' });
        }
    })
});

module.exports = router;