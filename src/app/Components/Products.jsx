import dbConnect from '@/lib/Mongodb';
import Link from 'next/link';
import React from 'react';

const Products = async () => {
    // MongoDB connection and fetch data
    const productsCollection = await dbConnect('products');
    const data = await productsCollection.find({}).toArray();

    return (
        <div className='max-w-11/12 mx-auto mt-18'>
            <h1 className='text-center text-3xl font-bold mb-12'> Product Highlights</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                {data.map(product => {
                    const shortDesc =
                        product.description.length > 80
                            ? product.description.slice(0, 80) + "..."
                            : product.description;

                    return (
                        <div key={product._id.toString()} className="card bg-base-100 w-96 shadow-sm">
                            <figure className="h-48 overflow-hidden">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </figure>
                            <div className="card-body">
                                <div className='flex  justify-between items-center'>
                                    <h2 className="card-title">{product.title}</h2>

                                    <div>
                                        <p>${product.price}</p>
                                    </div>
                                </div>
                                <p>
                                    {shortDesc}{" "}
                                    {product.description.length > 80 && (
                                        <Link
                                            href={`/products/${product._id.toString()}`}
                                            className="text-blue-500 underline"
                                        >
                                            See More
                                        </Link>
                                    )}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Products;
