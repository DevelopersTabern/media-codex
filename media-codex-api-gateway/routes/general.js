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
  
// MS-MOVIEGENRE
router.get('/movieGenre', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.get('/movieGenre/:id', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.post('/movieGenre', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.put('/movieGenre/:id', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
router.delete('/movieGenre/:id', (req, res, next) => {
    generalServiceProxy(req, res, next);
})
  
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