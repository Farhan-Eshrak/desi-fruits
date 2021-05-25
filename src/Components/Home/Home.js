import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Featured from './Featured/Featured';
// import Carousel from './Carousel/Carousel';
import HeadCarousel from './HeadCarousel/HeadCarousel';
// import Header from './Header/Header';
import './Home.css'
import Offer from './Offer/Offer';
import ProductCarousel from './ProductCarousel/ProductCarousel';
import Services from './Services/Services';

const Home = () => {
    return (
        <>

            <HeadCarousel />
            <section className="container">
                <Services />
            </section>

            {/* <Header/> */}

            <section className="container m-5">
                <ProductCarousel />
            </section>
            <section className="container">
                <h1 className="text-center mb-5">Featured Products</h1> <br />
                <Featured />
            </section>
            <section className=" mt-5">
                <h1 className="text-center">Todays Offer</h1> <hr /> <br />
                <Offer />
            </section>
            <section className="container mt-5">
                <h1 className="text-center">About Us</h1> <hr /> <br />
                <About />
            </section>

            <Footer />
        </>
    );
};

export default Home;