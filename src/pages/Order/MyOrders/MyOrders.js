import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProver';

const MyOrders = () => {
    const {user} = useContext(AuthContext)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setOrders(data)
            })
    }, [user?.email])

    return (
        <div>
            <h1 className='text-2xl font-bold text-center text-primary mt-5'>Total Orders: {orders.length}</h1>
        </div>
    );
};

export default MyOrders;