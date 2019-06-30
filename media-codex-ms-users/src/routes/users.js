const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/',(req,res) => {
    mysqlConnection.query('SELECT * FROM User', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/:idUser', (req,res)=>{
    const { idUser } = req.params;
    mysqlConnection.query('SELECT * FROM User WHERE idUser = ?', [idUser], (err,
    rows, fields) => {
        if(!err){
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/', (req, res) =>{
    const { idUser, userName, password, firstName, lastName, email, address } = req.body;
    const query =`
        CALL userAddOrEdit(?,?,?,?,?,?,?);
    `;
    mysqlConnection.query(query, [idUser, userName, password, firstName, lastName, email, address], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'User Saved'});
        } else {
            console.log(err);
        }   
    });
});

router.put('/:id',(req, res) => {
    const { userName, password, firstName, lastName, email, address } = req.body;
    const { idUser } = req.params;
    const query = 'CALL userAddOrEdit(?,?,?,?,?,?,?)';
    mysqlConnection.query(query, [idUser, userName, password, firstName, lastName, email, address], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'User Updated'});
        } else {
            console.log(err);
        }   
    });
});

router.delete('/:id', (req, res) =>{
    const { idUser } = req.params;
    mysqlConnection.query('DELETE FROM User WHERE idUser = ?', [idUser], (err, rows, fields) => {
        if (!err) {
            res.json({status: 'User Deleted'});
        } else {
            console.log(err);
        }
    });
});

module.exports = router;