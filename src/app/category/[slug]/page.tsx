"use client"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { productsByCategoryQuery } from "@/sanity/lib/queries";
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
  const { slug } = useParams();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (slug) {
        const data = await client.fetch(productsByCategoryQuery(Array.isArray(slug) ? slug[0] : slug));
        setProducts(data);
      }
    };
    fetchProducts();
  }, [slug]);

  return (
    <div className="my-5 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-4 text-center">{typeof slug === "string" ? slug.toUpperCase() : ""}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length === 0 && <p className="col-span-full text-center">No products available for this category.</p>}
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link href={`/products/${product.slug.current}`}>
              <Image
                src={urlFor(product.image).width(300).url()}
                alt={product.name}
                className="w-full h-[250px] object-cover rounded-md"
                width={300}
                height={250}
              />
            </Link>
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
