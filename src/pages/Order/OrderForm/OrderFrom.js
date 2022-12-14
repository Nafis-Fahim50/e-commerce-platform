import React from 'react';
import { useLoaderData } from 'react-router-dom';

const OrderFrom = () => {
    const product = useLoaderData();
    console.log(product)
    const {name} = product;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default OrderFrom;