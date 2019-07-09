var http = require('http');
const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();
const bodyParser = require('body-parser');

const userServiceProxy = httpProxy('http://192.168.99.100:27001');

const mediaServiceProxy = httpProxy('http://192.168.99.100:27002');

const generalServiceProxy = httpProxy('http://192.168.99.100:27003');

//MS-USER
app.get('/user', (req,res,next) => {
    userServiceProxy(req,res,next);
})

app.get('/user/:id', (req,res,next) => {
    userServiceProxy(req,res,next);
})

app.post('/user', (req,res,next) => {
    userServiceProxy(req,res,next);
})

app.put('/user/:id', (req,res,next) => {
    userServiceProxy(req,res,next);
})

app.delete('/user/:id', (req,res,next) => {
    userServiceProxy(req,res,next);
})


//MS-USER
app.get('/media', (req,res,next) => {
    mediaServiceProxy(req,res,next);
})

app.get('/media/:id', (req,res,next) => {
    mediaServiceProxy(req,res,next);
})

app.post('/media', (req,res,next) => {
    mediaServiceProxy(req,res,next);
})

app.put('/media/:id', (req,res,next) => {
    mediaServiceProxy(req,res,next);
})

app.delete('/media/:id', (req,res,next) => {
    mediaServiceProxy(req,res,next);
})


//MS-CASTING
app.get('/casting', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.get('/casting/:id', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.post('/casting', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.put('/casting/:id', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.delete('/casting/:id', (req,res,next) => {
    generalServiceProxy(req,res,next);
})


//MS-COMPANIES
app.get('/companies', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.get('/companies/:id', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.post('/companies', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.put('/companies/:id', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.delete('/companies/:id', (req,res,next) => {
    generalServiceProxy(req,res,next);
})


//MS-COUNTRIES
app.get('/countries', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.get('/countries/:id', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.post('/countries', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.put('/countries/:id', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.delete('/countries/:id', (req,res,next) => {
    generalServiceProxy(req,res,next);
})



//MS-LANGUAGES
app.get('/languages', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.get('/languages/:id', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.post('/languages', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.put('/languages/:id', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.delete('/languages/:id', (req,res,next) => {
    generalServiceProxy(req,res,next);
})


//MS-MEDIATYPE
app.get('/mediaType', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.get('/mediaType/:id', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.post('/mediaType', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.put('/mediaType/:id', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.delete('/mediaType/:id', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

//MS-MOVIEGENRE
app.get('/movieGenre', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.get('/movieGenre/:id', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.post('/movieGenre', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.put('/movieGenre/:id', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.delete('/movieGenre/:id', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

// MS-ROLES
app.get('/roles', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.get('/roles/:id', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.post('/roles', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.put('/roles/:id', (req,res,next) => {
    generalServiceProxy(req,res,next);
})

app.delete('/roles/:id', (req,res,next) => {
    generalServiceProxy(req,res,next);
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var server = http.createServer(app);
server.listen(27100);
