"use client";
import { useEffect, useState } from "react";
import { Product } from "../../../types";
import { getCartItem, removeItems, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";


export default function CartPage() {
  const [cartItem, setCartItem] = useState<Product[]>([]);

  useEffect(() => {
    setCartItem(getCartItem());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Are you sure?",
      showCancelButton: true,
      confirmButtonColor: "#388506",
      confirmButtonText: "Yes, remove it",
    }).then((result) => {
      if (result.isConfirmed) {
        removeItems(id);
        setCartItem(getCartItem());
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItem(getCartItem());
  };

  const calculatedTotal = () => {
    return cartItem.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to checkout",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3885d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully processed");
        setCartItem([]);
      }
    });
  };

  return (
   
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Shopping Cart</h1>

        {cartItem.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {cartItem.map((item) => (
              <div
                key={item._id}
                className="flex flex-col sm:flex-row items-center justify-between border border-gray-200 rounded-lg shadow-sm p-4"
              >
                <Image
                  src={item.image ? urlFor(item.image).url() : "/placeholder.jpg"}
                  alt={item.name}
                  className="w-[80px] h-[80px] object-cover rounded "
                  width={64}
                  height={64}
                />
                <div className="flex-1 text-center sm:text-left mt-2 sm:mt-0 px-6">
                  <h2 className="text-lg font-medium">{item.name}</h2>
                  <p className="text-gray-700">Price: ${item.price}</p>
                </div>
                <div className="flex items-center gap-2 mt-2 sm:mt-0 mr-5">
                  <button
                    onClick={() => handleQuantityChange(item._id, Math.max(1, item.quantity - 1))}
                    className="px-2 py-1 bg-gray-300 text-black rounded"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-300 text-black rounded"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="text-red-500 hover:text-red-700 text-sm mt-2 sm:mt-0"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-6 border-t border-gray-200 pt-4 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-lg font-semibold">Total Items: {cartItem.length}</p>
              <p className="text-lg font-semibold">Total Price: ${calculatedTotal()}</p>
              <Link href={"./checkout"}>
                <button
                  onClick={handleProceed}
                  className="mt-3 sm:mt-0 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
   
  );
}
