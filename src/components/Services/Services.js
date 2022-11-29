import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div>
            All services: {services.length}

        </div>
    );
};

export default Services;