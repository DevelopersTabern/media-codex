const express = require('express');
const router = express.Router();
const httpProxy = require('express-http-proxy');

const generalServiceProxy = httpProxy('ms-general:27003');

  
// MS-ROLES
router.get('/roles', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.get('/roles/:id', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.post('/roles', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.put('/roles/:id', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.delete('/roles/:id', (req, res, next) => {
    generalServiceProxy(req, res, next);
})

module.exports = router;