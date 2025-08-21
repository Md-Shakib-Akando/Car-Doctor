"use client";
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const { data: session, status } = useSession();

    return (
        <div>
            <div className="  bg-base-100 shadow-sm">
                <div className='max-w-11/12 mx-auto  navbar'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-x-6">
                                <Link href="/">Home</Link>
                                <Link href="/product">Product</Link>
                                {status === 'authenticated' && (
                                    <Link href="/Dashboard/AddProduct">Add Product</Link>
                                )}

                            </ul>
                        </div>
                        <Link href="/">
                            <img src={"/assets/logo.svg"} alt="" />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-6 text-lg font-semibold " >
                            <Link href="/" className='hover:text-[#FF3811]'>Home</Link>
                            <Link href="/product" className='hover:text-[#FF3811]'>Product</Link>
                            {status === 'authenticated' && (
                                <Link href="/Dashboard/AddProduct" className='hover:text-[#FF3811]'>Add Product</Link>
                            )}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {status == 'authenticated' ? (
                            <button
                                onClick={() => signOut({ callbackUrl: '/login' })}
                                className="btn bg-white text-[#FF3811] text-lg border-[#FF3811] hover:bg-[#FF3811] hover:text-white rounded"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link href={'/login'} className="btn bg-white text-[#FF3811] text-lg border-[#FF3811] hover:bg-[#FF3811] hover:text-white rounded">Login</Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;