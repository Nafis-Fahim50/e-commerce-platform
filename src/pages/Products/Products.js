import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState()
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    // console.log(products)
    return (
        <div>
           <h1 className='text-center text-2xl font-bold text-primary mb-5'>Total Products: {products.length}</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                products.map(product => <ProductCard
                key={product.id}
                product={product}></ProductCard>)
            }
           </div>
        </div>
    );
};

export default Products;