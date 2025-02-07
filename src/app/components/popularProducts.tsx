"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Product } from "../../../types";
import { client } from "@/sanity/lib/client";
import { popularProducts } from "@/sanity/lib/queries";
import Swal from "sweetalert2";
import { addToCart } from "@/app/actions/actions";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export default function PopularProducts() {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const fetchProduct: Product[] = await client.fetch(popularProducts);
      setProduct(fetchProduct);
    }
    fetchData();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(product);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center my-6 md:my-10">Popular Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((items) => (
          <div
            key={items._id}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <Link href={`/products/${items.slug}`} className="block">
              {items.image && (
                <Image
                  src={urlFor(items.image).url() || "/placeholder.png"}
                  alt={items.name || "Product image"}
                  width={500}
                  height={500}
                  className="w-full h-[200px] sm:h-[250px] object-cover rounded-t-lg"
                />
              )}
            </Link>
            <h1 className="text-orange-700 text-lg font-bold mt-4 text-center">
              {items.name}
            </h1>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-4 px-2">
              <h1 className="text-xl font-semibold text-gray-800 mb-2 sm:mb-0">
                ${items.price}
              </h1>
              <button
                onClick={(e) => handleAddToCart(e, items)}
                className="px-4 py-2 bg-gradient-to-bl from-blue-300 to-black/50 text-white font-bold hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg w-full sm:w-auto"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
