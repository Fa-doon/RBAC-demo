const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');
const { verifyRole } = require('../middleware/rbac');

// allows any authenticated user access 
router.get('/profile', verifyToken, verifyRole(['user', 'admin']), (req, res) => {
    res.status(200).json({ message: 'Profile access granted', user: req.user });
});

// allows only admins access
router.get('/admin/dashboard', verifyToken, verifyRole(['admin']), (req, res) => {
    res.json({ message: 'Dashboard access granted', user: req.user });
});

module.exports = router