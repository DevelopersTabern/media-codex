const express = require('express');
const router = express.Router();
const httpProxy = require('express-http-proxy');

const mediaServiceProxy = httpProxy('ms-media:27002');


// MS-MEDIA
router.get('/media', (req, res, next) => {
    mediaServiceProxy(req, res, next);
})
  
router.get('/media/:id', (req, res, next) => {
    mediaServiceProxy(req, res, next);
})
  
router.post('/media', (req, res, next) => {
    mediaServiceProxy(req, res, next);
})
  
router.put('/media/:id', (req, res, next) => {
    mediaServiceProxy(req, res, next);
})
  
router.delete('/media/:id', (req, res, next) => {
    mediaServiceProxy(req, res, next);
})
  
module.exports = router;