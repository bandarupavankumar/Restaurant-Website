import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
    const {
        cartItems,
        isCartOpen,
        toggleCart,
        updateQuantity,
        cartTotal
    } = useCart();

    if (!isCartOpen) return null;

    return (
        <>
            <div className="cart-overlay" onClick={toggleCart}></div>
            <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h2>Your Order</h2>
                    <button className="close-btn" onClick={toggleCart}>
                        <X size={24} />
                    </button>
                </div>

                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart">
                            <ShoppingBag size={48} />
                            <p>Your cart is empty</p>
                            <button className="btn btn-outline" onClick={toggleCart}>Start Shopping</button>
                        </div>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div className="item-details">
                                    <h4>{item.name}</h4>
                                    <p className="item-price">${item.price}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.id, -1)}><Minus size={14} /></button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)}><Plus size={14} /></button>
                                    </div>
                                </div>
                                <div className="item-total">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="total-row">
                            <span>Total</span>
                            <span className="total-amount">${cartTotal.toFixed(2)}</span>
                        </div>
                        <button className="btn btn-primary checkout-btn">
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;
