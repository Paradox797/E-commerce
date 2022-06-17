import React from 'react';
import open from '../../assets/images/open.jpg';
import trolley from '../../assets/images/market-trolley.png';
const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={open} class="max-w-sm rounded-lg shadow-2xl" />
                <img src={trolley} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Welcome to Trust & Trade !</h1>
                    <p class="py-6">Enjoy our collections!!! Make your choices and Live the life.
                        HAPPY SHOPPING.
                    </p>
                    <button class="btn btn-primary uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 hover:from-pink-500 hover:to-yellow-500 ...">Go to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;