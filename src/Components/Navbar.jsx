"use client";
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const { data: session, status } = useSession();
    const pathname = usePathname();

    const navLinkClass = (path) =>
        pathname === path
            ? 'text-[#FF3811] font-bold'
            : 'hover:text-[#FF3811]';

    return (
        <div className="sticky top-0 z-50 bg-base-100 shadow-sm">
            <div className=' md:max-w-11/12  mx-auto navbar'>
                <div className="navbar-start gap-2">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className=" md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2">
                            <li><Link href="/" className={navLinkClass('/')}>Home</Link></li>
                            <li><Link href="/product" className={navLinkClass('/product')}>Product</Link></li>
                            {status === 'authenticated' && (
                                <li><Link href="/Dashboard/AddProduct" className={navLinkClass('/Dashboard/AddProduct')}>Add Product</Link></li>
                            )}
                        </ul>
                    </div>
                    <Link href="/">
                        <img className='h-10 md:h-15' src={"/assets/logo.svg"} alt="Logo" />
                    </Link>
                </div>

                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 space-x-6 lg:text-lg font-semibold">
                        <li><Link href="/" className={navLinkClass('/')}>Home</Link></li>
                        <li><Link href="/product" className={navLinkClass('/product')}>Product</Link></li>
                        {status === 'authenticated' && (
                            <li><Link href="/Dashboard/AddProduct" className={navLinkClass('/Dashboard/AddProduct')}>Add Product</Link></li>
                        )}
                    </ul>
                </div>

                <div className="navbar-end">
                    {status == 'authenticated' ? (
                        <button
                            onClick={() => signOut({ callbackUrl: '/login' })}
                            className="btn bg-white text-[#FF3811] md:text-lg border-[#FF3811] hover:bg-[#FF3811] hover:text-white rounded"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link href={'/login'} className="btn bg-white text-[#FF3811] text-lg border-[#FF3811] hover:bg-[#FF3811] hover:text-white rounded">Login</Link>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Navbar;
