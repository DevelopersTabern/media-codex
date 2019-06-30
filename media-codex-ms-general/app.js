const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 27003;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log(`App listening on port ${port}!`));
app.use(require('./api/companies'));
app.use(require('./api/languages'));
app.use(require('./api/countries'));
app.use(require('./api/movieGenre'));
app.use(require('./api/roles'));
app.use(require('./api/casting'));
app.use(require('./api/mediaType'));
