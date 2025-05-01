const books = require('../models/bookModel');

// Mostrar todos los libros
exports.getAllBooks = (req, res) => {
  res.send(books);
};

// Mostrar un libro por índice
exports.getBookByIndex = (req, res) => {
  const index = parseInt(req.params.index);

  if (isNaN(index) || index < 0 || index >= books.length) {
    return res.status(404).send('Libro no encontrado');
  }

  const selectedBook = books[index];
  res.render('book', { book: selectedBook });
};
