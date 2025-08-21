import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
export default function SocialLogin() {
    const router = useRouter();
    const handleSocialLogin = async (provider) => {
        const res = await signIn(provider, { callbackUrl: "/product" });
    }
    return (

        <div className="flex justify-center space-x-6">

            <button onClick={() => handleSocialLogin("google")} className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 hover:cursor-pointer">
                <FcGoogle size={22} />
            </button>
        </div>
    );
}
