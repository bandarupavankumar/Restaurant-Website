import Hero from '../components/Hero';
import FoodGrid from '../components/FoodGrid';
import Suggestions from '../components/Suggestions';

const Home = () => {
    return (
        <>
            <Hero />
            <main className="container" id="menu-section">
                <FoodGrid />
            </main>
            <Suggestions />
        </>
    );
};

export default Home;
