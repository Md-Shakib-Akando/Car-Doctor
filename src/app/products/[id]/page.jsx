import dbConnect from '@/lib/Mongodb';
import React from 'react';
import Link from 'next/link';
import { ObjectId } from 'mongodb';

const ProductDetails = async ({ params }) => {
    const { id } = params;


    const productsCollection = await dbConnect('products');
    const product = await productsCollection.findOne({ _id: new ObjectId(id) });

    if (!product) {
        return (
            <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
                <h1 className="text-3xl font-bold">Product Not Found</h1>
            </div>
        );
    }

    return (
        <div className="max-w-11/12 mx-auto mt-12 mb-20 p-6 border border-gray-200 rounded shadow-sm">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2 ">
                    <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-full object-cover rounded"
                    />
                </div>
                <div className="lg:w-1/2 flex items-center pt-17 flex-col ">
                    <div>
                        <h1 className="text-2xl  lg:text-5xl font-bold mb-7">{product.title}</h1>
                        <p className="text-gray-700 mb-2"><span className="font-semibold text-lg">Brand:</span> {product.brand}</p>
                        <p className="text-gray-700 mb-2"><span className="font-semibold text-lg">Category:</span> {product.category}</p>
                        <p className="text-gray-700 mb-2"><span className="font-semibold text-lg">Stock:</span> {product.stock}</p>
                        <p className="text-gray-700 mb-4"><span className="font-semibold text-lg mb-7">Price:</span> ${product.price}</p>
                        <p className="text-gray-800 leading-relaxed text-justify text-[17px]">{product.description}</p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
