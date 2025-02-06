"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types";
import { getCartItem } from "../actions/actions";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";

export default function CheckoutPage() {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [discount, setDiscount] = useState<number>(0);
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        zipCode: "",
        city: "",
    });

    const [formErrors, setFormErrors] = useState<Record<string, boolean>>({});

    useEffect(() => {
        setCartItems(getCartItem());
        const appliedDiscount = localStorage.getItem("appliedDiscount");
        if (appliedDiscount) {
            setDiscount(Number(appliedDiscount));
        }
    }, []);

    const subTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    const total = subTotal - discount;

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value,
        });
    };

    const validateForm = () => {
        const errors: Record<string, boolean> = {};
        Object.keys(formValues).forEach((field) => {
            errors[field] = !formValues[field as keyof typeof formValues].trim();
        });
        setFormErrors(errors);
        return Object.values(errors).every((error) => !error);
    };

    const handlePlaceOrder = async () => {
        if (!validateForm()) {
            Swal.fire({
                title: "Error!",
                text: "Please fill in all required fields correctly.",
                icon: "error",
                confirmButtonText: "OK",
            });
            return;
        }

        const orderData = {
            _type: "order",
            ...formValues,
            cartItems: cartItems.map(item => ({
                _type: "reference",
                _ref: item._id,
            })),
            total,
            discount,
            orderDate: new Date().toISOString()
        };

        try {
            await client.create(orderData);
            localStorage.removeItem("appliedDiscount");
            Swal.fire({
                title: "Success!",
                text: "Your order has been placed successfully!",
                icon: "success",
                confirmButtonText: "OK",
            }).then(() => {
                setCartItems([]);
                setDiscount(0);
                setFormValues({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    address: "",
                    zipCode: "",
                    city: "",
                });
            });
        } catch (error) {
            console.error("Error creating order:", error);
            Swal.fire({
                title: "Error!",
                text: "Failed to place order. Please try again later.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                    {cartItems.map((item) => (
                        <div key={item._id} className="flex items-center gap-4 border-b py-3">
                            <Image
                                src={item.image ? urlFor(item.image).url() : '/placeholder-image.png'}
                                alt={item.name}
                                className="w-[100px] h-[100px] object-cover rounded"
                                width={64}
                                height={64}
                            />
                            <div>
                                <p className="font-medium">{item.name}</p>
                                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                                <p className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                    <div className="mt-4">
                        <p className="flex justify-between text-sm">
                            <span>Subtotal:</span>
                            <span>${subTotal.toFixed(2)}</span>
                        </p>
                        <p className="flex justify-between text-sm text-red-500">
                            <span>Discount:</span>
                            <span>- ${discount.toFixed(2)}</span>
                        </p>
                        <p className="flex justify-between font-bold text-lg mt-2">
                            <span>Total:</span>
                            <span>${total.toFixed(2)}</span>
                        </p>
                    </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Billing Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.keys(formValues).map((field) => (
                            <div key={field}>
                                <label className="block text-sm font-medium capitalize">
                                    {field.replace(/([A-Z])/g, " $1")}
                                </label>
                                <input
                                    id={field}
                                    type="text"
                                    value={formValues[field as keyof typeof formValues]}
                                    onChange={handleInput}
                                    className={`w-full p-2 border ${formErrors[field] ? "border-red-500" : "border-gray-300"} rounded`}
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={handlePlaceOrder}
                        className="w-full mt-4 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
}
