const express = require('express');
const router = express.Router();
const httpProxy = require('express-http-proxy');

const userServiceProxy = httpProxy('ms-users:27001')

// MS-USER

router.get('/user', (req, res, next) => {
    userServiceProxy(req, res, next);
})
  
router.get('/user/:id', (req, res, next) => {
    userServiceProxy(req, res, next);
})
  
router.post('/user', (req, res, next) => {
    userServiceProxy(req, res, next);
})
  
router.put('/user/:id', (req, res, next) => {
    userServiceProxy(req, res, next);
})
  
router.delete('/user/:id', (req, res, next) => {
    userServiceProxy(req, res, next);
})
  

module.exports = router;
