import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-semibold mb-4">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="text-gray-700">Email</label>
            <input
              type="email"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="text-gray-700">Password</label>
            <input
              type="password"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Sign In
          </button>

          <Link href="/rooms">Go to chat page </Link>
        </form>
      </div>
    </div>
  );
};

export default Home;
