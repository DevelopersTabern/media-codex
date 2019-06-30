const express = require('express');
const app = express();
const port = 27100;

app.get('/', (req, res) => res.send('Hello to the Innkeeper!'));

app.listen(port, () => console.log(`App listening on port ${port}!`));