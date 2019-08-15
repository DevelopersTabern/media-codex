const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 27002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log(`App listening on port ${port}!`));
app.use(require('./api/media'));
app.use(require('./api/mediaCompany'));
app.use(require('./api/mediaCountry'));
app.use(require('./api/mediaGenre'));
app.use(require('./api/mediaLanguage'));
