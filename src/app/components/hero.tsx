import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row mx-auto justify-center items-center my-10 px-4 md:px-10">
      
      {/* Image Section (Mobile: First, Desktop: Right Side) */}
      <div className="w-full flex justify-center md:w-auto order-1 md:order-2">
        <Image
          src="/Right Image.png"
          alt="right-img"
          width={400}
          height={400}
          className="w-[350px] max-w-xs md:max-w-none"
        />
      </div>

      {/* Content Section (Mobile: Below Image, Desktop: Left Side) */}
      <div className="w-full md:w-auto flex justify-center">
        <div className="bg-blue-950 text-white px-6 md:px-10 py-10 text-center md:text-left max-w-xs md:max-w-2xl">
          <h1 className="text-3xl md:text-4xl mb-4">
            The furniture brand for the <br /> future, with timeless designs
          </h1>
          <p className="mt-6 md:mt-10 leading-relaxed text-sm md:text-base">
            Our furniture is designed for people who want comfort, style, and durability without breaking the bank. Whether you&#34;re a young professional setting up your first apartment or a family looking for functional pieces, our furniture fits perfectly into any home.
          </p>

          {/* Button */}
          <Link href="/all-products">
            <button className="bg-gray-500 text-white px-6 md:px-8 py-3 md:py-4 mt-6 md:mt-10 w-full md:w-auto text-base md:text-lg tracking-wide">
              View collection
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
}
