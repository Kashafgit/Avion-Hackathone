
import {TruckIcon } from "lucide-react";
import Brandsec from "@/app/components/brand-sec";
import Image from "next/image";
import { Input } from "@/components/ui/input";


export default function About() {
    return (
        <>
            <div className="flex p-3 mt-10 bg-blue-950 justify-center">
                <TruckIcon className="text-white mr-4" />
                <p className="text-center text-white text-sm sm:text-base">
                    Free delivery on all orders over £50 with code easier checkout
                </p>
            </div>
        
            {/* heading-sec */}
            <div className=" max-w-7xl mx-auto gap-10 flex flex-col text-center md:flex-row justify-between md:px-28 py-20">
                <div >
                    <h2 className="text-3xl">A brand built on the love of craftmanship, quality and outstanding customer service</h2>
                </div>

                {/* Button */}
                <div className="md:flex items-center justify-center ">
                    <button className="px-4 py-2 bg-gray-300">View collection</button>
                </div>
            </div>

            {/* hero section */}
            <div className="flex flex-col-reverse md:flex-row mx-auto justify-center items-center p-10 gap-5">

                {/* Content Section */}
                <div className="bg-blue-950 text-white max-w-2xl px-10 py-[60px] text-center md:text-left md:">
                    <h1 className="text-4xl mb-6">
                        It started with a small idea
                    </h1>
                    <p className="mt-10 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facilis
                        beatae perspiciatis aliquam labore possimus, dicta, assumenda quo nisi et
                        eligendi facere. Obcaecati, similique molestiae? Quaerat quod vitae error sint.
                    </p>

                    {/* Button */}
                    <button className="bg-gray-500 text-white px-8 py-4 mt-10 w-full md:w-auto text-lg tracking-wide">
                        View collection
                    </button>
                </div>

                {/* Image Section */}
                <div className="md:block">
                    <Image
                        src="/Image Block.png"
                        alt="right-img"
                        width={500}
                        height={500}
                        className="mx-auto"
                    />
                </div>
            </div>

            {/* 2nd part */}
            {/* hero-section */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:ml-20">
                <div className="flex justify-center mt-6 lg:mt-0 ">
                    <Image src={"/Image (1).png"} alt="right-img" width={600} height={600} />
                </div>
                {/* content right section */}
                <div className="lg:w-[600px] p-6 text-gray-500">
                    <h1 className="text-3xl">Our service isn&apos;t just personal, it&apos;s actually hyper personally exquisite</h1>
                    <br />

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reprehenderit dolorem, ut veritatis
                        cupiditate aperiam.
                    </p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi necessitatibus provident dolor tempore molestiae deleniti optio, amet voluptatum fugit repellendus est autem!</p>
                    <br />

                    <button className="bg-gray-500 text-white px-6 py-3 mt-10 w-full md:w-auto text-lg tracking-wide">
                        Get in touch
                    </button>
                </div>
            </div>

            <Brandsec />
            
            <div className="bg-gray-100 py-10 px-6 sm:px-12 md:px-24 mt-20">
                <div className="bg-white py-10 px-6 sm:px-16 md:px-72">
                    <h1 className="text-3xl text-center text-gray-900 py-8">Join the club and get the benefits</h1>
                    <p className="text-center text-gray-700 mb-10">
                        Sign up for newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
                    </p>
                    <div className="flex w-full max-w-[400px] justify-between mt-10">
                        <Input placeholder="your@email.com" className="bg-gray-white text-gray-900 border-none py-6 pl-6 w-[80%]" />
                        <button className=" bg-gray-900 w-[35%] px-4 text-gray-300">Sign up</button>
                    </div>
                </div>
            </div>

       
        </>
    )
}
