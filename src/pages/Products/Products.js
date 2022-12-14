import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('https://e-commerce-server-two.vercel.app/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    if(products.length === 0){
        return <button className="btn loading mx-auto my-12 ml-96">loading</button>
    }
    return (
        <div>
           <h1 className='text-center text-2xl font-bold text-primary mb-5'>Total Products: {products.length}</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                products.map(product => <ProductCard
                key={product._id}
                product={product}></ProductCard>)
            }
           </div>
        </div>
    );
};

export default Products;