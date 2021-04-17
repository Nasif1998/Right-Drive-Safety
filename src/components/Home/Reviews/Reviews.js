import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9003/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
            <section className="testimonials my-5 py-5">
                <div className="container">
                    <div className="section-header">
                        <h5 className="text-primary text-uppercase">Review</h5>
                        <h1>What Our Client <br/> Says </h1>
                    </div>
                    <div className="card-deck mt-5">
                         {
                             reviews.map(review => <Review review={review} key={review.name}/>)
                         }
                     </div>
                </div>
            </section>
    );
};

export default Reviews;