import React from 'react';

function Footer() {
    return (
        <footer className="bg-white dark:bg-black">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-start lg:gap-8">


                    <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
                        <div className="col-span-2">
                            <h2 className="text-2xl font-bold text-black dark:text-white">Get the latest news!</h2>
                            <p className="mt-4 text-gray-500 dark:text-gray-400">
                                Stay updated with our latest news and offerings.
                            </p>
                        </div>

                        <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                            <form className="w-full">
                                <label htmlFor="UserEmail" className="sr-only">Email</label>
                                <div className="border lg:ml-80 border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4 dark:border-black">
                                    <input
                                        type="email"
                                        id="UserEmail"
                                        placeholder="john@rhcp.com"
                                        required
                                        className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm dark:bg-black dark:text-white"
                                    />
                                    <button
                                        type="submit"
                                        className="block w-full rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-red-600 focus:outline-none focus:ring focus:ring-teal-300 dark:bg-red-500 dark:hover:bg-white hover:text-black"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                        <div>
                            <h3 className="font-medium text-gray-900 dark:text-white">Company</h3>
                            <nav className="mt-4 flex flex-col gap-2">
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">About</a>
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Careers</a>
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Privacy Policy</a>
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Terms of Service</a>
                            </nav>
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-900 dark:text-white">Support</h3>
                            <nav className="mt-4 flex flex-col gap-2">
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Contact Us</a>
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Help Center</a>
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">FAQs</a>
                            </nav>
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-900 dark:text-white">Social</h3>
                            <nav className="mt-4 flex flex-col gap-2">
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Facebook</a>
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Twitter</a>
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Instagram</a>
                            </nav>
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-900 dark:text-white">Follow Us</h3>
                            <nav className="mt-4 flex flex-col gap-2">
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">LinkedIn</a>
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">YouTube</a>
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Pinterest</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400">
                &copy; 2024 Your Company. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
