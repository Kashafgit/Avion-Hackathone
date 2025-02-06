import { CircleCheck, CreditCard, Sprout, Truck } from "lucide-react";


export default function Brandsec() {
    return (
        <>
            <div className="my-10">
                <div className="text-3xl text-center mb-10 text-gray-900">
                    What makes our brand different
                </div>

                {/* Flexbox grid layout for responsive columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* Item 1 */}
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                        <Truck className="text-blue-600 text-4xl mb-4" />
                        <h2 className="text-xl py-4 text-center text-gray-900 font-semibold">Next day as standard</h2>
                        <p className="text-gray-700 text-center">Order before 3pm and get your order the next day as standard</p>
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                        <CircleCheck className="text-green-600 text-4xl mb-4" />
                        <h2 className="text-xl py-4 text-center text-gray-900 font-semibold">Made by true artisans</h2>
                        <p className="text-gray-700 text-center">Handmade crafted goods made with real passion and craftsmanship&apos;s touch</p>
                    </div>

                    {/* Item 3 */}
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                        <CreditCard className="text-yellow-600 text-4xl mb-4" />
                        <h2 className="text-xl py-4 text-center text-gray-900 font-semibold">Unbeatable prices</h2>
                        <p className="text-gray-700 text-center">For our materials and quality, you won&apos;t find better prices anywhere</p>
                    </div>

                    {/* Item 4 */}
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                        <Sprout className="text-green-700 text-4xl mb-4" />
                        <h2 className="text-xl py-4 text-center text-gray-900 font-semibold">Recycled packaging</h2>
                        <p className="text-gray-700 text-center">We use 100% recycled packaging to ensure our footprint is manageable</p>
                    </div>
                </div>
            </div>
        </>
    );
}
