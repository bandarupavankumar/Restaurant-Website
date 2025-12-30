const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const foodRoutes = require('./routes/foodRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
// Use environment variable for Mongo URI or fallback to local
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/food-app';

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => {
        console.error('❌ MongoDB Connection Error:', err.message);
        console.error('   -> Please ensure MongoDB service is running on Port 27017');
    });

// Routes
app.use('/api/foods', foodRoutes);

app.get('/', (req, res) => {
    res.send('Food App API is running...');
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
