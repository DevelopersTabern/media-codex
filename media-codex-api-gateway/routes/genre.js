const express = require('express');
const router = express.Router();
const httpProxy = require('express-http-proxy');

const generalServiceProxy = httpProxy('ms-general:27003');


// MS-GENRE
router.get('/genre', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.get('/genre/:id', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.post('/genre', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.put('/genre/:id', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.delete('/genre/:id', (req, res, next) => {
    generalServiceProxy(req, res, next);
})

module.exports = router;