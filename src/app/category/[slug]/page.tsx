"use client"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client"; // Import imageUrlBuilder
import { urlFor } from "@/sanity/lib/image";
import { productsByCategoryQuery } from "@/sanity/lib/queries"; // Import query
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  price: number;
  image: { asset: { _ref: string } };
  quantity: number;
  description: string;
}

const CategoryPage = () => {
  const { slug } = useParams(); // Get categorySlug from URL
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (slug) {
        const data = await client.fetch(productsByCategoryQuery(Array.isArray(slug) ? slug[0] : slug));
        setProducts(data);
      }
    };

    fetchProducts();
  }, [slug]); // Re-fetch when the slug changes

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{typeof slug === "string" ? slug.toUpperCase() : ""}</h1>
      <div className="grid grid-cols-4 gap-4">
        {products.length === 0 && <p>No products available for this category.</p>}
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded shadow">
          <Link href={`/products/${product.slug.current}`}>
           <Image
              src={urlFor(product.image).width(300).url()} // Correct way to get image URL
              alt={product.name}
              className="w-[300px] h-[300px] object-cover"
              width={200}
              height={200}
            />
           
           </Link>
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;