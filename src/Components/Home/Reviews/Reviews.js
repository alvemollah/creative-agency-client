import React, { useEffect, useState } from 'react';
import Feedback from '../Feedback/Feedback';

const Review = () => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('https://infinite-mesa-16282.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <section>
            <h1 className="text-center" style={{ color: "#171b4e" }}>Client <span style={{ color: "#7AB259" }}>Feedback</span></h1>
            <div className="row p-5 mt-5 mb-5">
                {
                    review.map(feedback => <Feedback key={Math.random()} feedback={feedback} />)
                }
            </div>
        </section>
    );
};

export default Review;