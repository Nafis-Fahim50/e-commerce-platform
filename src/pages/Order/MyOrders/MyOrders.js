import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProver';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
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
            <h1 className='text-2xl font-bold text-center text-primary my-5'>Total Orders: {orders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order,i)=><tr
                            key={order._id}>
                            <th>{i+1}</th>
                            <td>{order.productName}</td>
                            <td>$ {order.price}</td>
                            <td>{order.address}</td>
                            <td>
                                {order?.paid?
                                <button className='btn btn-success'>paid</button>
                                :
                                <button className='btn btn-error'>Pay</button>}
                            </td>
                          </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;