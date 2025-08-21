import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react"

import Link from "next/link";
import { useRouter } from "next/navigation";
export function LoginForm() {
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        const res = await signIn("credentials", { redirect: false, email, password });
        if (res?.ok) router.push("/product");
    }
    return (
        <form onSubmit={handleSubmit}>
            {/* Email Input */}
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
                Sign In
            </button>

            {/* Divider */}
            <div className="flex items-center my-6">
                <hr className="flex-grow border-gray-300" />
                <span className="px-2 text-gray-400">Or Sign In with</span>
                <hr className="flex-grow border-gray-300" />
            </div>

            {/* Social Login */}
            <div className="flex justify-center space-x-6">

                <button className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 hover:cursor-pointer">
                    <FcGoogle size={22} />
                </button>
            </div>

            {/* Footer Text */}
            <p className="text-center mt-6 text-sm text-gray-600">
                Don't Have an account?{" "}
                <Link href="/Register" className="text-orange-500 font-medium hover:underline">
                    Sign Up
                </Link>
            </p>
        </form>
    )
}
