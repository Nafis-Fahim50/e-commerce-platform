import React from 'react';
import { Link } from 'react-router-dom';
import earphone from '../../../images/earphone.png'

const Slider = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${earphone})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content  text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-2xl font-bold">Welcome to REPLIQ E-Commerce Platrform</h1>
                    <p className="mb-5">Here you can find different kind of products. Such as Smart-Phone, Laptop, Watch, Earphone and so many daily uses products.</p>
                    <Link to='/products'><button className="btn btn-primary">Shop Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Slider;