const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const connection = require('./dao/connection');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(require('./routes/user'));

app.use(require('./routes/media'));

app.use(require('./routes/roles'));

app.use(require('./routes/casting'));

app.use(require('./routes/companies'));

app.use(require('./routes/countries'));

app.use(require('./routes/mediaType'));

app.use(require('./routes/movieGenre'));


app.post('/auth', (req, res) => {
  const authBody = req.body;
  connection.query('SELECT * FROM User WHERE email = ?',[authBody.email], function(err,results){
    if(err){
      
      console.log(err);
      return res.send({msg: 'error', error: err})
    
    }else{
      
      if(results.length > 0){

        if(authBody.password == results[0].password){
          jwt.sign(authBody, 'supersecreta', {}, (err,token) => {

            return res.send({token: token});
    
          });
        }else{

          res.send({msg: 'clave invalida', error: err})

        }
      }else{

        res.send({msg: 'El correo no existe', error: err})
        
      }
    }
  })  
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
