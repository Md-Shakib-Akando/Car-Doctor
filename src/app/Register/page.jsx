"use client";


import RegisterForm from "./components/RegisterForm";

export default function page() {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex-1 items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-144">
                    <img src="/assets/images/login/login.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="p-10 flex-1 border-1 border-gray-200 rounded flex-col justify-center">
                    <h2 className="text-4xl font-bold text-center mb-12">Sing Up</h2>

                    <RegisterForm></RegisterForm>



                </div>
            </div>
        </section>
    );
}
