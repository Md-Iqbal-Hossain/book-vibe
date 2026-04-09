import React from 'react';
import { Link, useRouteError } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError();

    const message =
        error?.status === 404
            ? "Page not found"
            : error?.message || "Something went wrong";

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-md w-full text-center text-white">
                
                {/* Error Code */}
                <h1 className="text-6xl font-extrabold mb-4">
                    {error?.status || "Error"}
                </h1>

                {/* Message */}
                <p className="text-lg mb-6">{message}</p>

                {/* Button */}
                <Link to="/">
                    <button className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-200 transition duration-300">
                        Go Home
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default ErrorPage;