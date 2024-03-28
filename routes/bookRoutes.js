const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken'); 
const { getBooks, getBookById, addBook, updateBook, deleteBook } = require('../models/Book'); 

const secretKey = process.env.JWT_SECRET_KEY || 'your_secret_key'; // A titkos kulcsot környezeti változóban tárolja

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
   
    if (authHeader) {
        const token = authHeader.split(' ')[1];
       
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
           
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

router.post('/books', authenticateJWT, async (req, res) => {
    try {
        const { title, author, isbn } = req.body;
        const result = await addBook(title, author, isbn);
        res.status(201).json({ message: 'Book added', data: result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/books', async (req, res) => {
    try {
        const books = await getBooks();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/books/:id', async (req, res) => {
    try {
        const book = await getBookById(req.params.id);
        res.json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/books/:id', authenticateJWT, async (req, res) => {
    try {
        const { title, author, isbn } = req.body;
        const result = await updateBook(req.params.id, title, author, isbn);
        res.json({ message: 'Book updated', data: result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete('/books/:id', authenticateJWT, async (req, res) => {
    try {
        const result = await deleteBook(req.params.id);
        res.json({ message: 'Book deleted', data: result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;