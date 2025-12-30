const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

// Initial Mock Data to Seed
const INITIAL_FOODS = [
    {
        name: "Spicy Beef Burger",
        desc: "Juicy beef patty with jalapeños and special sauce.",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
        rating: 4.8,
        category: "Burger"
    },
    {
        name: "Margherita Pizza",
        desc: "Classic tomato base, mozzarella, and fresh basil.",
        price: 14.50,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=80",
        rating: 4.5,
        category: "Pizza"
    },
    {
        name: "Chicken Caesar Salad",
        desc: "Crispy lettuce, grilled chicken, croutons, and parmesan.",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1550304999-8cf88fdb3153?auto=format&fit=crop&w=500&q=80",
        rating: 4.6,
        category: "Salad"
    },
    {
        name: "Sushi Platter",
        desc: "Assorted fresh sashimi and nigiri rolls.",
        price: 24.00,
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=500&q=80",
        rating: 4.9,
        category: "Sushi"
    },
    {
        name: "Pasta Carbonara",
        desc: "Creamy sauce with pancetta and black pepper.",
        price: 13.50,
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=500&q=80",
        rating: 4.7,
        category: "Pasta"
    },
    {
        name: "Berry Smoothie",
        desc: "Fresh mixed berries, yogurt, and honey.",
        price: 6.50,
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=500&q=80",
        rating: 4.8,
        category: "Drink"
    }
];

// GET all foods
router.get('/', async (req, res) => {
    try {
        const foods = await Food.find();
        res.json(foods);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET single food item
router.get('/:id', async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        if (!food) return res.status(404).json({ message: 'Food not found' });
        res.json(food);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST create a single food item
router.post('/', async (req, res) => {
    try {
        const newFood = new Food(req.body);
        const savedFood = await newFood.save();
        res.status(201).json(savedFood);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT update a food item
router.put('/:id', async (req, res) => {
    try {
        const updatedFood = await Food.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedFood);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE a food item
router.delete('/:id', async (req, res) => {
    try {
        await Food.findByIdAndDelete(req.params.id);
        res.json({ message: 'Food item deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST seed data
router.post('/seed', async (req, res) => {
    try {
        await Food.deleteMany({}); // Clear existing
        const createdFoods = await Food.insertMany(INITIAL_FOODS);
        res.json(createdFoods);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST add comment
router.post('/:id/comments', async (req, res) => {
    try {
        const { user, text, rating } = req.body;
        const food = await Food.findById(req.params.id);
        if (!food) return res.status(404).json({ message: 'Food not found' });

        const newComment = { user, text, rating: Number(rating) };
        food.comments.push(newComment);

        // Recalculate average rating
        const totalRating = food.comments.reduce((sum, c) => sum + c.rating, 0);
        food.rating = (totalRating / food.comments.length).toFixed(1);

        await food.save();
        res.status(201).json(food);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
