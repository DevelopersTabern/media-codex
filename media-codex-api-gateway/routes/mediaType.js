const express = require('express');
const router = express.Router();
const httpProxy = require('express-http-proxy');

const generalServiceProxy = httpProxy('ms-general:27003');


// MS-MEDIATYPE
router.get('/mediaType', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.get('/mediaType/:id', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.post('/mediaType', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.put('/mediaType/:id', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.delete('/mediaType/:id', (req, res, next) => {
    generalServiceProxy(req, res, next);
})

module.exports = router;