import React from 'react';
import open from '../../assets/images/open.jpg';
import trolley from '../../assets/images/market-trolley.png';
import AppReview from '../AppReview';
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={open} className="max-w-sm rounded-lg shadow-2xl" />
                <img src={trolley} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Welcome to Trust & Trade !</h1>
                    <p className="py-6">Enjoy our collections!!! Make your choices and Live the life.
                        HAPPY SHOPPING.
                    </p>
                    <button className="btn btn-primary uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 hover:from-pink-500 hover:to-yellow-500 ...">Go to Cart</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;