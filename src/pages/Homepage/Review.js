import React from 'react';

const Review = ({ review }) => {
    return (

        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p5>{review.review}</p5>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 mr-5 ">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <p3>{review.Location}</p3>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Review;