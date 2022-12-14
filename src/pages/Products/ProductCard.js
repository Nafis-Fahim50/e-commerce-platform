import React from 'react';

const ProductCard = ({ product }) => {
    const { img, name, price, seller, ratings } = product;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">Seller: {seller}</div>
                        <div className="badge badge-outline">Ratings: {ratings}</div>
                    </div>
                    <p className='text-xl'> <span className='font-bold text-xl'>Price:</span> $ {price}</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary w-full">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;