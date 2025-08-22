import dbConnect from '@/lib/Mongodb';
import Link from 'next/link';
import React from 'react';

const Products = async () => {

    const productsCollection = await dbConnect('products');
    const data = await productsCollection.find({}).toArray();

    return (
        <div className="max-w-[95%] mx-auto mt-12 mb-12">
            <h1 className="text-center text-4xl sm:text-5xl font-bold mb-5">Product Highlights</h1>
            <p className="text-center text-base sm:text-lg mb-12">
                The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised <br className='hidden md:block' />
                Words Which Don't Look Even Slightly Believable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {data.map((product) => {
                    const shortDesc =
                        product.description.length > 80
                            ? product.description.slice(0, 80) + "..."
                            : product.description;

                    return (
                        <div
                            key={product._id.toString()}
                            className="card border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full"
                        >
                            <figure className="h-64 sm:h-60 md:h-64 p-4 flex items-center justify-center overflow-hidden">
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="w-full h-full object-cover rounded"
                                />
                            </figure>

                            <div className="card-body p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <h2 className="card-title text-lg sm:text-xl font-semibold">{product.title}</h2>
                                    <p className="font-semibold text-orange-500 text-base sm:text-lg">
                                        ${product.price}
                                    </p>
                                </div>

                                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                                    {shortDesc}{" "}
                                    {product.description.length > 80 && (
                                        <Link
                                            href={`/products/${product._id.toString()}`}
                                            className="text-orange-500 underline"
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
