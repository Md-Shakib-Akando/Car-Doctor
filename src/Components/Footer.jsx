import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white dark:bg-gray-100 dark:text-gray-800">
            <div className="container mx-auto px-4 py-10">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-10 lg:space-y-0">

                    <div className="flex flex-col lg:w-1/3 items-center lg:items-start">
                        <a rel="noopener noreferrer" href="#" className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full  dark:bg-violet-600">
                                <img src="/assets/Group 2.png" alt="Logo" className="  " />
                            </div>
                            <span className="text-2xl font-semibold">Car Doctor</span>
                        </a>
                        <p className="mt-4 text-center lg:text-left text-sm max-w-xs">
                            Your trusted partner for quality car parts and maintenance services.
                        </p>
                    </div>


                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 lg:w-2/3">

                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase dark:text-gray-900">Product</h3>
                            <ul className="space-y-1 text-sm">
                                <li><a href="#" className="hover:underline">Features</a></li>
                                <li><a href="#" className="hover:underline">Integrations</a></li>
                                <li><a href="#" className="hover:underline">Pricing</a></li>
                                <li><a href="#" className="hover:underline">FAQ</a></li>
                            </ul>
                        </div>


                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase dark:text-gray-900">Company</h3>
                            <ul className="space-y-1 text-sm">
                                <li><a href="#" className="hover:underline">Privacy</a></li>
                                <li><a href="#" className="hover:underline">Terms of Service</a></li>
                            </ul>
                        </div>


                        <div className="space-y-3">
                            <h3 className="uppercase dark:text-gray-900">Developers</h3>
                            <ul className="space-y-1 text-sm">
                                <li><a href="#" className="hover:underline">Public API</a></li>
                                <li><a href="#" className="hover:underline">Documentation</a></li>
                                <li><a href="#" className="hover:underline">Guides</a></li>
                            </ul>
                        </div>


                        <div className="space-y-3">
                            <h3 className="uppercase dark:text-gray-900">Support</h3>
                            <ul className="space-y-1 text-sm">
                                <li><a href="#" className="hover:underline">Help Center</a></li>
                                <li><a href="#" className="hover:underline">Contact Us</a></li>
                                <li><a href="#" className="hover:underline">Report Issue</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm">
                    &copy; {new Date().getFullYear()} Car Doctor. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
