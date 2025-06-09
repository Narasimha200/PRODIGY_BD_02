require('dotenv').config()

const express = require('express');
const connectDB = require('./config/db')
const userRoutes = require('./routes/user.route');

const app = express();

connectDB();

app.use(express.json());
app.get("/", (req, res) => res.send("API Running"));

app.use('/api/users', userRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
