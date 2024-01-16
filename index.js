const express = require('express');
const app = express();
const port = 3000;
const userRoutes = './routes/userRoutes';

userRoutes(app)

app.get('/', (req, res) => res.send('ola mundo'));

app.listen(port, () => console.log('sevidor rodando na porta 3000node'));