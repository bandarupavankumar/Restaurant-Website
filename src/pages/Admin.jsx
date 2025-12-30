import { useState, useEffect } from 'react';
import { PlusCircle, Loader2, CheckCircle, AlertCircle, Trash2, Edit2, X } from 'lucide-react';
import './Admin.css';

const Admin = () => {
    // Form State
    const [formData, setFormData] = useState({
        name: '',
        desc: '',
        price: '',
        image: '',
        category: 'Burger',
        rating: 5.0
    });

    // Table State
    const [foods, setFoods] = useState([]);
    const [editingId, setEditingId] = useState(null);

    // UI State
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);

    // Toast State
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

    const showNotification = (message, type = 'success') => {
        setToast({ show: true, message, type });
        setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
    };

    // Fetch all items on mount
    useEffect(() => {
        fetchFoods();
    }, []);

    const fetchFoods = async () => {
        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const res = await fetch(`${API_URL}/api/foods`);
            const data = await res.json();
            setFoods(data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleEdit = (item) => {
        setFormData({
            name: item.name,
            desc: item.desc,
            price: item.price,
            image: item.image,
            category: item.category,
            rating: item.rating
        });
        setEditingId(item._id);
        setShowForm(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCancel = () => {
        setEditingId(null);
        setShowForm(false);
        setFormData({
            name: '', desc: '', price: '', image: '', category: 'Burger', rating: 5.0
        });
        // setStatus(null); // Assuming setStatus is defined elsewhere or removed
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Delete this item?")) return;
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

        try {
            await fetch(`${API_URL}/api/foods/${id}`, { method: 'DELETE' });

            // Optimistic Update
            setFoods(prev => prev.filter(item => item._id !== id));
            showToast('Item deleted successfully!', 'success');
        } catch (err) {
            showToast('Failed to delete item.', 'error');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const isEditing = !!editingId; // Use existing editingId state
        const editId = editingId; // Use existing editingId state

        try {
            const method = isEditing ? 'PUT' : 'POST';
            const url = isEditing
                ? `${API_URL}/api/foods/${editId}`
                : `${API_URL}/api/foods`;

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) throw new Error(data.message || 'Operation failed');

            showNotification(editingId ? "Item updated successfully!" : "Item added successfully!", "success");

            // OPTIMIZED: Update local state immediately with functional updates
            if (editingId) {
                setFoods(prev => prev.map(f => f._id === editingId ? data : f));
            } else {
                setFoods(prev => [...prev, data]);
            }

            if (!editingId) {
                // Reset form
                setFormData({ name: '', desc: '', price: '', image: '', category: 'Burger', rating: 5.0 });
            } else {
                setTimeout(handleCancel, 500); // Close fast
            }

        } catch (err) {
            console.error(err);
            showNotification(err.message || "Operation failed", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container admin-page">
            <div className="admin-header">
                <h1>Admin <span className="highlight">Dashboard</span></h1>
                <p>Manage your food menu efficiently.</p>
            </div>

            <div className="dashboard-actions">
                <button
                    className={`btn ${showForm ? 'btn-outline' : 'btn-primary'}`}
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? <><X size={18} /> Close Form</> : <><PlusCircle size={18} /> Add New Item</>}
                </button>
            </div>

            {showForm && (
                <div className="admin-content fade-in">
                    <form className="admin-form" onSubmit={handleSubmit}>
                        <div className="form-header">
                            <h2>{editingId ? 'Edit Item' : 'Add New Item'}</h2>
                            {editingId && <button type="button" onClick={handleCancel} className="close-icon"><X size={20} /></button>}
                        </div>

                        <div className="form-group">
                            <label>Item Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Price ($)</label>
                                <input type="number" name="price" value={formData.price} onChange={handleChange} step="0.01" required />
                            </div>

                            <div className="form-group">
                                <label>Category</label>
                                <select name="category" value={formData.category} onChange={handleChange}>
                                    {["Burger", "Pizza", "Salad", "Sushi", "Pasta", "Dessert", "Drink"].map(c => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Image URL</label>
                            <input type="url" name="image" value={formData.image} onChange={handleChange} placeholder="https://..." required />
                        </div>

                        <div className="form-group">
                            <label>Description</label>
                            <textarea name="desc" value={formData.desc} onChange={handleChange} required />
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
                            {loading ? (
                                <><Loader2 className="spinner" size={20} /> {editingId ? 'Updating...' : 'Adding...'}</>
                            ) : (
                                editingId ? "Update Item" : "Add New Item"
                            )}
                        </button>

                    </form>

                    {/* Live Preview (Only show when adding/editing) */}
                    <div className="preview-section">
                        <h3>Preview</h3>
                        <div className="food-card preview-card">
                            <div className="card-img-wrapper">
                                {formData.image ? <img src={formData.image} alt="Prev" /> : <div className="placeholder-img">No Image</div>}
                            </div>
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>{formData.name || 'Name'}</h3>
                                    <span className="price">${formData.price || '0.00'}</span>
                                </div>
                                <p>{formData.desc || 'Description...'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Data Table */}
            <div className="table-container">
                <h2>Menu Items ({foods.length})</h2>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foods.map(item => (
                            <tr key={item._id}>
                                <td>
                                    <img src={item.image} alt={item.name} className="table-img" />
                                </td>
                                <td>
                                    <strong>{item.name}</strong>
                                    <p className="table-desc">{item.desc.substring(0, 30)}...</p>
                                </td>
                                <td><span className="badge-cat">{item.category}</span></td>
                                <td>${item.price}</td>
                                <td className="actions-cell">
                                    <button className="action-btn edit" onClick={() => handleEdit(item)}>
                                        <Edit2 size={18} />
                                    </button>
                                    <button className="action-btn delete" onClick={() => handleDelete(item._id)}>
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Toast Notification */}
            {toast.show && (
                <div className={`toast-overlay fade-in ${toast.type}`}>
                    <div className="toast-content">
                        {toast.type === 'success' ? <CheckCircle size={32} /> : <AlertCircle size={32} />}
                        <p>{toast.message}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admin;
