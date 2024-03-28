
const express = require('express');
const router = express.Router();
const { getLoans, getLoanById, addLoan, updateLoan, deleteLoan } = require('../models/Loan');

router.get('/loans', async (req, res) => {
 try {
 const loans = await getLoans();
 res.json(loans);
 } catch (err) {
 res.status(500).json({ message: err.message });
 }
});

router.get('/loans/:id', async (req, res) => {
 try {
 const loan = await getLoanById(req.params.id);
 res.json(loan);
 } catch (err) {
 res.status(500).json({ message: err.message });
 }
});

router.post('/loans', async (req, res) => {
 try {
 const { bookId, userId, loanDate, returnDate } = req.body;
 const result = await addLoan(bookId, userId, loanDate, returnDate);
 res.status(201).json({ message: 'Loan added', data: result });
 } catch (err) {
 res.status(500).json({ message: err.message });
 }
});

router.put('/loans/:id', async (req, res) => {
 try {
 const { bookId, userId, loanDate, returnDate } = req.body;
 const result = await updateLoan(req.params.id, bookId, userId, loanDate, returnDate);
 res.json({ message: 'Loan updated', data: result });
 } catch (err) {
 res.status(500).json({ message: err.message });
 }
});

router.delete('/loans/:id', async (req, res) => {
 try {
 const result = await deleteLoan(req.params.id);
 res.json({ message: 'Loan deleted', data: result });
 } catch (err) {
 res.status(500).json({ message: err.message });
 }
});

module.exports = router;
