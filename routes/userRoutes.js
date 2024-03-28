const express = require('express');
const router = express.Router();
const { getUsers, getUserById, addUser, updateUser, deleteUser, loginUser } = require('../models/User');

router.get('/users', async (req, res) => {
    try {
        const users = await getUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/users/:id', async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/users', async (req, res) => {
    try {
        const { username, password, role } = req.body;
        const result = await addUser(username, password, role);
        res.status(201).json({ message: 'User added', data: result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/users/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await loginUser(username, password);
        if (user) {
            res.json({ message: 'User logged in', data: user });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/users/:id', async (req, res) => {
    try {
        const { username, password, role } = req.body;
        const result = await updateUser(req.params.id, username, password, role);
        res.json({ message: 'User updated', data: result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        const result = await deleteUser(req.params.id);
        res.json({ message: 'User deleted', data: result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;