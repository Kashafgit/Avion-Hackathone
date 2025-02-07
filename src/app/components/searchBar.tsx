"use client";
import { useState } from "react";
import { Product } from "../../../types";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Search, X } from "lucide-react";

export default function SearchSanityData() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Product[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleSearch = async () => {
    if (query.length > 2) {
      try {
        const searchResults = await client.fetch(
          `*[_type == "product" && name match "${query}"]{
            _id,
            name,
            "image": image.asset->url,
            price,
            "slug": slug.current
          }`
        );
        setResult(searchResults);
        setShowResult(true);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      alert("Please enter at least 3 characters to search products");
      setShowResult(false);
    }
  };

  const handleClearSearch = () => {
    setQuery("");
    setResult([]);
    setShowResult(false);
  };

  return (
    <div className="relative z-[100] flex-wrap mx-auto bg-gray-50 shadow-md rounded max-w-2xl p-2">
      {/* Search Input and Buttons */}
      <div className="flex items-center gap-1 sm:gap-2 flex-wrap md:flex-nowrap">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full md:w-auto flex-1 px-2 py-1 sm:px-3 sm:py-2 text-sm sm:text-base focus:outline-none border rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-900 text-white px-3 py-1 sm:px-4 sm:py-2 rounded shadow hover:bg-blue-950 transition"
        >
          <Search className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        {showResult && (
          <button
            onClick={handleClearSearch}
            className="bg-gray-300 text-gray-800 px-2 py-1 sm:px-3 sm:py-2 rounded shadow hover:bg-red-700 transition hover:text-white"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}
      </div>

      {/* Search Results */}
      {showResult && (
        <div className="mt-4 bg-white absolute z-10 w-full h-44 md:h-[250px] overflow-y-auto rounded shadow-lg p-3">
          <h2 className="text-sm sm:text-lg font-bold mb-2">Search Products:</h2>
          {result.length > 0 ? (
            <div className="grid grid-cols-1 gap-2 sm:gap-4">
              {result.map((product) =>
                product?.slug ? (
                  <Link href={`/products/${product.slug}`} key={product?._id ?? `fallback-key-${Math.random()}`}>
                    <div className="flex gap-x-2 sm:gap-x-4 items-center bg-gray-100 border rounded shadow p-2 sm:p-3 hover:bg-gray-200 transition">
                      <Image
                        width={200}
                        height={200}
                        src={product?.image ? urlFor(product.image).url() : "/default-image.jpg"}
                        alt={product?.name ?? "Unknown product"}
                        className="w-10 h-10 sm:w-16 sm:h-16 object-cover rounded"
                      />
                      <div>
                        <h3 className="text-xs sm:text-[12px] font-semibold text-gray-700">
                          {product?.name ?? "No name available"}
                        </h3>
                        <p className="text-xs sm:text-sm pt-1 sm:pt-2">${product?.price ?? "N/A"}</p>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div key={product?._id ?? `fallback-key-${Math.random()}`} className="text-red-500 text-xs sm:text-sm">
                    No slug available for this product.
                  </div>
                )
              )}
            </div>
          ) : (
            <p className="text-gray-500 text-xs sm:text-sm">No products found for "{query}".</p>
          )}
        </div>
      )}
    </div>
  );
}
