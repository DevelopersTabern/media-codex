const express = require('express');
const router = express.Router();
const connection = require('../dao/connection');

/* SAVE MEDIAGENRE */
router.post('/mediaGenre', (req, res) => {
    const query = 'INSERT INTO MediaGenre(idMedia, idGenre) VALUES(?,?)';
    const idMedia = req.body.idMedia;
    const idGenre = req.body.idGenre;

    connection.query(query, [idMedia, idGenre], (err, rows) => {
        if (err) {
            res.send({ msg: 'Ha ocurrido un error', err });
        }
        else {
            res.send({ msg: 'Elemento creado' });
        }
    })
});

module.exports = router;