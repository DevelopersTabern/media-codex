const express = require('express');
const router = express.Router();
const httpProxy = require('express-http-proxy');

const generalServiceProxy = httpProxy('ms-general:27003');

 
// MS-COUNTRIES
router.get('/countries', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.get('/countries/:id', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.post('/countries', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.put('/countries/:id', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.delete('/countries/:id', (req, res, next) => {
    generalServiceProxy(req, res, next);
})

module.exports = router;