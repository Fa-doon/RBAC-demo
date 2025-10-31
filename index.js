require('dotenv').config();
const express = require('express');
const connectToDB = require('./config/db');
const protectedRoutes = require('./routes/protected');
const authRoutes = require('./routes/auth');

const app = express();

// connect to database
connectToDB();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
