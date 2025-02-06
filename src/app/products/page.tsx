"use client";
import React, { useState, useEffect } from 'react';
import { Product } from '../../../types';
import { client } from '@/sanity/lib/client';
import { allProducts } from '@/sanity/lib/queries';
import Image from 'next/image';
// import Swal from 'sweetalert2';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
// import { addToCart } from '../actions/actions';

const ProductsPage = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const fetchProduct: Product[] = await client.fetch(allProducts);
      setProduct(fetchProduct);
    }
    fetchData();
  }, []);

  // const handleAddToCart = (e: React.MouseEvent, product: Product) => {
  //   e.preventDefault();
  //   Swal.fire({
  //     position: 'top-right',
  //     icon: 'success',
  //     title: `${product.name} added to cart`,
  //     showConfirmButton: false,
  //     timer: 1000,
  //   });
  //   addToCart(product);
  // };
console.log(product)
product.forEach((item) => {console.log(item._id)})
  return (
    <div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center p-6 sm:p-8 md:p-10">
        {product.map((items) => (
          <div
            key={items._id}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <Link href={`/products/${items.slug}`}>
              {items.image && (
                <Image
                  src={urlFor(items.image).url() || '/placeholder.png'}
                  alt={items.name || 'Product image'}
                  width={500}
                  height={500}
                  className="w-full h-[200px] sm:h-[250px] object-cover rounded-t-lg"
                />
              )}
            </Link>
            <h1 className="text-orange-700 text-lg font-bold mt-4 text-center">
              {items.name}
            </h1>

            <div className="flex justify-between items-center mt-4 px-4">
              <h1 className="text-xl font-semibold text-gray-800">
                ${items.price}
              </h1>
              {/* <button
                onClick={(e) => handleAddToCart(e, items)}
                className="px-4 py-2 bg-gradient-to-bl from-blue-300 to-black/50 text-white font-bold hover:scale-110 transition-transform duration-300 ease-in-out rounded-lg"
              >
                Add to cart
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
