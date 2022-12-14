import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProver';

const MyOrders = () => {
    const { user, logout } = useContext(AuthContext)
    const [orders, setOrders] = useState([])
   
    useEffect(() => {
        fetch(`https://e-commerce-server-two.vercel.app/orders?email=${user?.email}`,{
            headers:{
                authorization : `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    return logout();
                }
                return res.json()
            })
            .then(data => {
                // console.log(data);
                setOrders(data)
            })
    }, [user?.email, logout])

    if(orders.length === 0){
        return <button className="btn loading mx-auto my-12 ml-96">loading</button>
    }


    return (
        <div>
            <h1 className='text-2xl font-bold text-center text-primary my-5'>Total Orders: {orders?.length}</h1>
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