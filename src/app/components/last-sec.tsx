import Image from "next/image";

export default function Bottom() {
    return (
        <>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:ml-20">
                <div className="lg:w-[600px] p-6 text-gray-500">
                    <h1 className="text-2xl">From a studio in London to a global with over 400 outlets</h1>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reprehenderit dolorem, ut veritatis
                        cupiditate aperiam.
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sit assumenda laboriosam, reprehenderit
                        accusantium quibusdam similique sint. Nemo sunt provident exercitationem!
                    </p>
                    <div className="lg:ml-20 mt-7">
                        <button className="bg-gray-100 px-5 py-2 w-full lg:w-auto">Get in touch</button>
                    </div>
                </div>
                <div className="flex justify-center mt-6 lg:mt-0">
                    <Image src={"/Image (2).png"} alt="right-img" width={600} height={600} />
                </div>
            </div>
        </>
    );
}
