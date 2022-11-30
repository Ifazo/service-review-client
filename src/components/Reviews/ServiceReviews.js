import React, { useEffect, useState} from 'react';

const ServiceReviews = ({_id: serviceId}) => {

    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceId=${serviceId}`)
        .then(res => res.json())
        .then(data => {setReviews(data)})
    }, [serviceId])

    return (
        <>
            Service reviews are listed here: {reviews.length}
            <h2 id="reviews-heading" class="sr-only">{serviceId}</h2>
            
        </>
    );
};

export default ServiceReviews;