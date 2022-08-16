import React from 'react';


const Booking = ({ service, setbooked }) => {
    const { cardtittle, des, img, item_number } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    <div>
                        {cardtittle}
                    </div>
                    <div className="badge badge-secondary">NEW </div>
                </h2>
                <p3>{des}</p3>
                <p>{item_number > 1 ? <span className='text-white'>{item_number} items Available </span> : <span className='text-red-500'>No item Available </span>} </p>
                <div className="card-actions justify-end">
                    <div className="navbar-end">
                        <label
                            htmlFor="BookingModal"
                            disabled={item_number == 0}
                            onClick={() => setbooked(service)}
                            className="btn btn-primary uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 hover:from-pink-500 hover:to-yellow-500 ...">Add to cart
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Booking;
