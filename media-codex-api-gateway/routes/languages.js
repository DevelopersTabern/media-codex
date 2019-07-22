const express = require('express');
const router = express.Router();
const httpProxy = require('express-http-proxy');

const generalServiceProxy = httpProxy('ms-general:27003');


  
// MS-LANGUAGES
router.get('/languages', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.get('/languages/:id', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.post('/languages', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.put('/languages/:id', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.delete('/languages/:id', (req, res, next) => {
    generalServiceProxy(req, res, next);
})

module.exports = router;