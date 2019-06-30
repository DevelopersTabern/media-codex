const express = require('express');
const app = express();
const port = 27001;

// middlewares
app.use(express.json());

// Routes
app.use(require('./routes/users'));

app.get('/', (req, res) => res.send('Hello to the Innkeeper!'));

app.listen(port, () => console.log(`App listening on port ${port}!`));
