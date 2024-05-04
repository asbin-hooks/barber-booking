import express from "express";
import Admin from "../../db/models/AdminSchema.js";
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the provided email and password match the hardcoded credentials
        if (email !== 'Admin123' || password !== 'admin123') {
            return res.status(403).json({ message: 'Email or password not matching' });
        }

        // If the credentials match, return success
        return res.status(200).json({ message: 'Logged In' });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
