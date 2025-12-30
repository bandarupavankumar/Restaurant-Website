import { ShoppingBag, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
    const { toggleCart, cartItems } = useCart();
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                {/* ... existing links ... */}
                <Link to="/" className="logo">
                    <span className="logo-icon">🍔</span>
                    <h1>Food<span className="accent">ies</span></h1>
                </Link>

                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/admin">Admin</Link>
                </div>

                <div className="search-bar">
                    <Search size={18} className="search-icon" />
                    <input type="text" placeholder="Search for food..." />
                </div>

                <div className="nav-actions">
                    <button className="icon-btn" onClick={toggleCart}>
                        <ShoppingBag size={24} />
                        {itemCount > 0 && <span className="badge">{itemCount}</span>}
                    </button>

                    <SignedOut>
                        <SignInButton mode="modal">
                            <button className="btn btn-primary">Login</button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
