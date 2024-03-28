const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'library'
});

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getUsers = async () => {
    const conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM users");
    conn.release();
    return rows;
};

const getUserById = async (id) => {
    const conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM users WHERE id = ?", [id]);
    conn.release();
    return rows[0];
};

const loginUser = async (username, password) => {
    const conn = await pool.getConnection();
    const [user] = await conn.query("SELECT * FROM users WHERE username = ?", [username]);
    conn.release();

    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ sub: user.id, role: user.role }, 'your_secret_key', { expiresIn: '1h' });
        return { ...user, token };
    }

    return null;
};

const addUser = async (username, password, role) => {
    const hashedPassword = bcrypt.hashSync(password, 8);
    const conn = await pool.getConnection();
    const result = await conn.query("INSERT INTO users (username, password, role) VALUES (?, ?, ?)", [username, hashedPassword, role]);
    conn.release();
    return result;
};

const updateUser = async (id, username, password, role) => {
    const conn = await pool.getConnection();
    const hashedPassword = password ? bcrypt.hashSync(password, 8) : undefined;
    const result = await conn.query("UPDATE users SET username = ?, password = ?, role = ? WHERE id = ?", [username, hashedPassword || 'NULL', role, id]);
    conn.release();
    return result;
};

const deleteUser = async (id) => {
    const conn = await pool.getConnection();
    const result = await conn.query("DELETE FROM users WHERE id = ?", [id]);
    conn.release();
    return result;
};

module.exports = {
    getUsers,
    getUserById,
    loginUser,
    addUser,
    updateUser,
    deleteUser
};