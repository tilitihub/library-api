const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'library'
});

const getBooks = async () => {
    const conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM books");
    conn.release();
    return rows;
};

const getBookById = async (id) => {
    const conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM books WHERE id = ?", [id]);
    conn.release();
    return rows[0];
};

const addBook = async (title, author, isbn) => {
    const conn = await pool.getConnection();
    const result = await conn.query("INSERT INTO books (title, author, isbn) VALUES (?, ?, ?)", [title, author, isbn]);
    conn.release();
    return result;
};

const updateBook = async (id, title, author, isbn) => {
    const conn = await pool.getConnection();
    const result = await conn.query("UPDATE books SET title = ?, author = ?, isbn = ? WHERE id = ?", [title, author, isbn, id]);
    conn.release();
    return result;
};

const deleteBook = async (id) => {
    const conn = await pool.getConnection();
    const result = await conn.query("DELETE FROM books WHERE id = ?", [id]);
    conn.release();
    return result;
};

const searchBooks = async (searchTerm) => {
    const conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM books WHERE title LIKE ? OR author LIKE ? OR isbn LIKE ?", [`%${searchTerm}%`, `%${searchTerm}%`, `%${searchTerm}%`]);
    conn.release();
    return rows;
};

module.exports = {
    getBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook,
    searchBooks 
};