import Image from "next/image";

export default function Hero() {
    return (
        <>
            
            <div className="flex flex-col-reverse md:flex-row mx-auto justify-center items-center p-10 ">
                
                {/* Content Section */}
                <div className="bg-blue-950 text-white max-w-2xl px-10 py-[75px] text-center md:text-left md:">
                    <h1 className="text-4xl mb-6">
                        The furniture brand for the <br /> future, with timeless designs
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
                        src="/Right Image.png"
                        alt="right-img"
                        width={400}
                        height={400}
                        className="mx-auto"
                    />
                </div>
            </div>
        </>
    );
}

