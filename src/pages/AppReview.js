import React from 'react'
import person1 from '../../src/assets/images/6.jpg'
import person2 from '../../src/assets/images/7.jpg'
import Review from './Homepage/Review'
const AppReview = () => {
    const reviews = [
        {
            id: 1,
            name: "Swad",
            review: "Good...easy to use...",
            Location: "Dhaka,Bangladesh",
            img: person1
        },
        {
            id: 2,
            name: "Mustasin",
            Location: "Kishoreganj,Bangladesh",
            review: "Not bad...easy to use...",
            img: person2
        },
    ];
    return (
        <section className='my-26'>
            <div>
                <div>
                    <h4 className="text-xl text-primary font-bold">AppReview</h4>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-gap-5'>
                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
        </section>

    )
}
export default AppReview;