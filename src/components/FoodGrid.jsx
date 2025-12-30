import { useState, useEffect } from 'react';
import { Plus, Loader2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './FoodGrid.css';

const FoodCard = ({ item }) => {
    const { addToCart } = useCart();

    return (
        <div className="food-card">
            <div className="card-img-wrapper">
                <img src={item.image} alt={item.name} loading="lazy" />
                <span className="card-rating">⭐ {item.rating}</span>
            </div>
            <div className="card-content">
                <div className="card-header">
                    <h3>{item.name}</h3>
                    <span className="price">${item.price}</span>
                </div>
                <p>{item.desc}</p>
                <button className="add-btn" onClick={() => addToCart({ ...item, id: item._id })}>
                    Add to Cart <Plus size={16} />
                </button>
            </div>
        </div>
    );
};



const FoodGrid = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
                const response = await fetch(`${API_URL}/api/foods`);
                if (!response.ok) throw new Error('Failed to fetch menu');
                const data = await response.json();
                setFoodItems(data);
            } catch (err) {
                console.error("Error loading foods:", err);
                setError("Failed to load menu items. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchFoods();
    }, []);

    if (loading) return <div className="loading-container"><Loader2 className="spinner" size={48} /><p>Loading tasty menu...</p></div>;
    if (error) return <div className="error-container"><p>😕 {error}</p></div>;

    return (
        <section className="food-grid-section">
            <div className="section-header" data-aos="fade-up">
                <h2>Popular <span className="highlight">Dishes</span></h2>
                <p>Explore our curated menu from the kitchen.</p>
            </div>

            <div className="food-grid">
                {foodItems.map((item, index) => (
                    <div key={item._id} data-aos="fade-up" data-aos-delay={index * 100}>
                        <FoodCard item={item} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FoodGrid;
