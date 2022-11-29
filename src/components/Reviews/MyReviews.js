import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    // console.log(user);
    const [reviews, setReviews] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [user?.email])

    return (
        <div>
            My Reviews are listed here: {reviews.length}
        </div>
    );
};

export default MyReviews;