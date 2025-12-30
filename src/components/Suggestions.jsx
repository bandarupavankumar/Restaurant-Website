import './Suggestions.css';

const Suggestions = () => {
    // Mock data for suggestions (or could accept props)
    const suggestions = [
        { id: 101, name: 'Truffle Burger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=60&w=500', desc: "Chef's special with premium truffle oil." },
        { id: 102, name: 'Spicy Ramen', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=60&w=500', desc: "Authentic japanese broth with a kick." },
        { id: 103, name: 'Vegan Bowl', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=60&w=500', desc: "Healthy greens and grains mix." },
    ];

    return (
        <section className="suggestions-section">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <h2>Chef's <span className="highlight">Suggestions</span></h2>
                    <p>Hand-picked recommendations just for you.</p>
                </div>

                <div className="suggestions-grid">
                    {suggestions.map((item, i) => (
                        <div key={item.id} className="suggestion-card" data-aos="fade-up" data-aos-delay={i * 100}>
                            <img src={item.image} alt={item.name} />
                            <div className="sugg-content">
                                <h3>{item.name}</h3>
                                <p>{item.desc}</p>
                                <button className="btn-text">Order Now →</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Suggestions;
