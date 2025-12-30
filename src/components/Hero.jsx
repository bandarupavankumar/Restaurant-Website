import './Hero.css';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <ScrollReveal>
                        <span className="tag">🚀 Fastest Delivery</span>
                    </ScrollReveal>

                    <ScrollReveal delay={100}>
                        <h1>Order your favorite <br /> food in <span className="highlight">minutes</span></h1>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <p>Freshly cooked meals delivered to your doorstep. Choose from thousands of restaurants and varied cuisines.</p>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <div className="hero-btns">
                            <button className="btn btn-primary" onClick={() => document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' })}>Order Now</button>
                            <button className="btn btn-outline" onClick={() => document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' })}>View Menu</button>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={400}>
                        <div className="stats">
                            <div className="stat-item">
                                <h3>30m</h3>
                                <p>Delivery</p>
                            </div>
                            <div className="stat-item">
                                <h3>2k+</h3>
                                <p>Restaurants</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="hero-image">
                    <ScrollReveal delay={200}>
                        <div className="image-wrapper">
                            {/* Using a placeholder from unsplash or similar for now if needed, or emoji/css art */}
                            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000" alt="Delicious Food" />
                            <div className="floating-card c1">
                                <span>🔥</span> Hot & Spicy
                            </div>
                            <div className="floating-card c2">
                                <span>⭐</span> 4.9 Rating
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Hero;
