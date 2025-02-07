"use client";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useSignIn } from "@clerk/nextjs";
import React, { useState } from "react";

const LoginPage = () => {
    const { isLoaded, signIn } = useSignIn();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Left Section */}
            <div className="w-full md:w-1/2 bg-gray-100 flex flex-col justify-center items-center p-6 md:p-10">
                <h1 className="text-3xl font-bold text-center">Welcome to Avion Furniture</h1>
                <p className="text-gray-600 mt-4 text-center">
                    Experience the finest furniture collection with great discounts.
                </p>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-10">
                <SignedIn>
                    <UserButton />
                    <h2 className="text-2xl font-semibold mt-4">Welcome</h2>
                    <p className="text-green-600 mt-2 text-center">
                        Get up to 30% discount on your first order!
                    </p>
                </SignedIn>

                <SignedOut>
                    <h1 className="text-2xl font-bold">Login</h1>

                    <div className="w-full max-w-sm mt-3">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="w-full max-w-sm mt-3">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button className="w-full max-w-sm bg-blue-600 text-white p-3 mt-4 rounded-md hover:bg-blue-700">
                        <SignInButton mode="modal" />
                    </button>

                    {/* Forgot Password */}
                    <p className="text-sm text-blue-500 cursor-pointer mt-2">Forgot Password?</p>

                    {/* Create Account */}
                    <p className="mt-4 text-gray-600 text-center">
                        New here? 
                        <span className="text-blue-600 cursor-pointer ml-1">
                            <SignUpButton mode="modal" />
                        </span>
                    </p>
                </SignedOut>
            </div>
        </div>
    );
};

export default LoginPage;
