import { Facebook, Twitter, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-col">
                    <div className="logo">
                        <span className="logo-icon">🍔</span>
                        <h2>Food<span className="accent">ies</span></h2>
                    </div>
                    <p>Delivering happiness to your doorstep, one meal at a time.</p>
                </div>

                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/admin">Admin</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Contact</h3>
                    <p>123 Tasty Street</p>
                    <p>Foodville, FC 90210</p>
                    <p>hello@foodies.com</p>
                </div>

                <div className="footer-col">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="#" className="social-btn"><Facebook size={20} /></a>
                        <a href="#" className="social-btn"><Twitter size={20} /></a>
                        <a href="#" className="social-btn"><Instagram size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Foodies. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
