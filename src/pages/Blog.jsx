import { BLOG_POSTS } from '../data/blogData';
import './Blog.css';

const Blog = () => {
    return (
        <div className="container blog-page">
            <div className="blog-header">
                <h1>Foodie <span className="highlight">Chronicles</span></h1>
                <p>Stories, recipes, and culinary adventures from around the world.</p>
            </div>

            <div className="blog-grid">
                {BLOG_POSTS.map(post => (
                    <article key={post.id} className="blog-card">
                        <div className="blog-img-wrapper">
                            <img src={post.image} alt={post.title} loading="lazy" />
                            <span className="blog-date">{post.date}</span>
                        </div>
                        <div className="blog-content">
                            <h3>{post.title}</h3>
                            <p className="blog-excerpt">{post.excerpt}</p>
                            <div className="blog-meta">
                                <span>By {post.author}</span>
                                <button className="read-more">Read More →</button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Blog;
