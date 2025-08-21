"use client"
import React from 'react';
import { FcGoogle } from "react-icons/fc";

import Link from "next/link";
import { registerUser } from '@/app/actions/auth/registerUser';
import SocialLogin from '@/app/login/Components/SocialLogin';
export default function RegisterForm() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        await registerUser({ name, email, password });
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
                <label className="block text-gray-600 mb-1">Name</label>
                <input
                    name='name'
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none "
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-600 mb-1">Email</label>
                <input
                    name='email'
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none "
                />
            </div>

            {/* Password Input */}
            <div className="mb-4">
                <label className="block text-gray-600 mb-1">Password</label>
                <input
                    name='password'
                    type="password"
                    placeholder="Your password"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none "
                />
            </div>


            {/* Sign In Button */}
            <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition hover:cursor-pointer">
                Sign Up
            </button>
            <div className="flex items-center my-6">
                <hr className="flex-grow border-gray-300" />
                <span className="px-2 text-gray-400">Or Sign In with</span>
                <hr className="flex-grow border-gray-300" />
            </div>

            <SocialLogin></SocialLogin>

            {/* Footer Text */}
            <p className="text-center mt-6 text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-orange-500 font-medium hover:underline">
                    Sign In
                </Link>
            </p>
        </form>
    );
};





