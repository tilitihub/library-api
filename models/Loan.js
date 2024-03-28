
const mariadb = require('mariadb');
const pool = mariadb.createPool({
 host: 'localhost',
 user: 'your_username',
 password: 'your_password',
 database: 'library'
});

const getLoans = async () => {
 const conn = await pool.getConnection();
 const rows = await conn.query("SELECT * FROM loans");
 conn.release();
 return rows;
};

const getLoanById = async (id) => {
 const conn = await pool.getConnection();
 const rows = await conn.query("SELECT * FROM loans WHERE id = ?", [id]);
 conn.release();
 return rows[0];
};

const addLoan = async (bookId, userId, loanDate, returnDate) => {
 const conn = await pool.getConnection();
 const result = await conn.query("INSERT INTO loans (bookId, userId, loanDate, returnDate) VALUES (?, ?, ?, ?)", [bookId, userId, loanDate, returnDate]);
 conn.release();
 return result;
};

const updateLoan = async (id, bookId, userId, loanDate, returnDate) => {
 const conn = await pool.getConnection();
 const result = await conn.query("UPDATE loans SET bookId = ?, userId = ?, loanDate = ?, returnDate = ? WHERE id = ?", [bookId, userId, loanDate, returnDate, id]);
 conn.release();
 return result;
};

const deleteLoan = async (id) => {
 const conn = await pool.getConnection();
 const result = await conn.query("DELETE FROM loans WHERE id = ?", [id]);
 conn.release();
 return result;
};

module.exports = {
 getLoans,
 getLoanById,
 addLoan,
 updateLoan,
 deleteLoan
};
