const express = require('express');
const router = express.Router();
const httpProxy = require('express-http-proxy');

const generalServiceProxy = httpProxy('ms-general:27003');


// MS-CASTING
router.get('/casting', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.get('/casting/:id', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.post('/casting', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.put('/casting/:id', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.delete('/casting/:id', (req, res, next) => {
    generalServiceProxy(req, res, next);
})

module.exports = router;