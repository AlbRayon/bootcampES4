const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes');

app.set('view engine', 'ejs');

app.get('/path', (req, res) => {
  res.send('Ruta de ejemplo activa');
});

app.use('/bookList', bookRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
