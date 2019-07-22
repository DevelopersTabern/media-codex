const express = require('express');
const router = express.Router();
const httpProxy = require('express-http-proxy');

const generalServiceProxy = httpProxy('ms-general:27003');

  
// MS-COMPANIES
router.get('/companies', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.get('/companies/:id', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.post('/companies', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.put('/companies/:id', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.delete('/companies/:id', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
module.exports = router;