import React, { useEffect, useState} from 'react';

const ServiceReviews = ({service}) => {
    const { _id: serviceId} = service;
    const [reviews, setReviews] = useState({});
    
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceId=${serviceId}`)
        .then(res => res.json())
        .then(data => {setReviews(data)})
    }, [serviceId])
    return (
        <div>
            Service reviews are listed here: {reviews.length}
            <h2 id="reviews-heading" class="sr-only">Reviews</h2>
            {/* console.log(reviews); */}
        </div>
    );
};

export default ServiceReviews;