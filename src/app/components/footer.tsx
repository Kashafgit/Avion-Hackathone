"use client"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Footer() {
    const router = useRouter();
    const [email, setEmail] = useState("");

    return (
        <footer className="bg-blue-950 p-10">
            <div className="flex flex-col lg:flex-row justify-between text-white">
                <div className="flex flex-col lg:flex-row lg:gap-32 text-white mb-6 lg:mb-0">
                    <div>
                        <ul className="space-y-5">
                            <li>Menu</li>
                            <li>New arrivals</li>
                            <li>Best sellers</li>
                            <li>Recently viewed</li>
                            <li>Popular this week</li>
                            <li>All Products</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-5">
                            <li>Crockery</li>
                            <li>Furniture</li>
                            <li>Homeware</li>
                            <li>Plant pots</li>
                            <li>Chairs</li>
                            <li>Crockery</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-5">
                            <li>Our company</li>
                            <li>About us</li>
                            <li>Vacancies</li>
                            <li>Contact us</li>
                            <li>Privacy</li>
                            <li>Return policy</li>
                        </ul>
                    </div>
                </div>

                {/* Email Sign-Up Section */}
                <div className="flex flex-col gap-3 mt-6 lg:mt-0">
                    <h4 className="text-white font-semibold">Subscribe to our Newsletter</h4>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-2 rounded-md border border-gray-400 text-black w-full lg:w-64"
                        />
                        <button
                            onClick={() => router.push("/login")}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center border-t-2 border-gray-300 mt-5 pt-6">
                <div>
                    <h4 className="text-white">Copyright 2022 Avion LTD</h4>
                </div>
                <div className="flex gap-6 mt-6 lg:mt-0">
                    <Linkedin className="text-white cursor-pointer hover:text-gray-300" />
                    <Facebook className="text-white cursor-pointer hover:text-gray-300" />
                    <Instagram className="text-white cursor-pointer hover:text-gray-300" />
                    <Twitter className="text-white cursor-pointer hover:text-gray-300" />
                </div>
            </div>
        </footer>
    );
}
