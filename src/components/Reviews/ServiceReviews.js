import React, { useEffect, useState} from 'react';
import Reviews from './Reviews';

const ServiceReviews = ({serviceId}) => {

    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceId=${serviceId}`)
        .then(res => res.json())
        .then(data => {setReviews(data)})
    }, [serviceId])

    return (
        <>
            Service reviews are listed here: {reviews.length}
            <Reviews></Reviews>
        </>
    );
};

export default ServiceReviews;