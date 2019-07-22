var http = require('http');
const express = require('express');
const httpProxy = require('express-http-proxy');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(require('./routes/user'));

app.use(require('./routes/media'));

app.use(require('./routes/general'));

app.use(require('./routes/casting'));

app.use(require('./routes/companies'));

app.use(require('./routes/countries'));


app.post('/auth', (req, res) => {
  const authBody = req.body;

  // CONSULTA EN BASE DE DATOS

  // EXISTE
  jwt.sign(authBody, 'supersecreta', {}, (err, token) => {
    if (err) {
      console.log(err);
      return res.send({msg: 'error', error: err})
    }

    return res.send({token: token});
  });

  // NO EXISTE
})

app.post('/waifus', (req, res) => {
  const token = req.body.token;

  jwt.verify(token, 'supersecreta', {}, (err, decoded) => {
    if (err) {
      return res.send({msg: 'Tu, no estas autenticado', err});
    }

    return res.send('waifus');
  })
})


var server = http.createServer(app);
server.listen(27100);
