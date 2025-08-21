"use client";

import { FcGoogle } from "react-icons/fc";

import Link from "next/link";

export default function page() {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex-1 items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-144">
                    <img src="/assets/images/login/login.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="p-10 flex-1 border-1 border-gray-200 rounded flex-col justify-center">
                    <h2 className="text-4xl font-bold text-center mb-12">Sing Up</h2>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none "
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none "
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Your password"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none "
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Your password"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none "
                        />
                    </div>

                    {/* Sign In Button */}
                    <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition hover:cursor-pointer">
                        Sign Up
                    </button>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-gray-300" />
                        <span className="px-2 text-gray-400">Or Sign In with</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    {/* Social Login */}
                    <div className="flex justify-center space-x-6">

                        <button className="p-3  bg-gray-200 rounded-full hover:bg-gray-300 hover:cursor-pointer">
                            <FcGoogle size={22} />
                        </button>
                    </div>

                    {/* Footer Text */}
                    <p className="text-center mt-6 text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link href="/login" className="text-orange-500 font-medium hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
