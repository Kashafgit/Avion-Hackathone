"use client";
import { ShoppingCart, User2Icon, Menu } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import SearchSanityData from "./searchBar";
import CategoryDropdown from "./category";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center px-10 py-4 bg-white shadow-md">
 
      <div className="text-3xl font-bold">
        <Link href="/">Avion</Link>
      </div>

 
      <div className="hidden md:flex gap-5 items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/all-products">All Products</Link>
        <CategoryDropdown />
      </div>

      <div className="flex gap-5 items-center ">
        <div className="hidden md:block">
        <SearchSanityData/>
        </div>
        <Link href="/cart">
          <ShoppingCart />
        </Link>

        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <Link href="/login">
            <User2Icon />
          </Link>
        </SignedOut>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px]">
              <div className="flex flex-col gap-4 mt-5">
                <Link href="/" className="text-lg">
                  Home
                </Link>
                <Link href="/about" className="text-lg">
                  About
                </Link>
                <Link href="/all-products" className="text-lg">
                  All Products
                </Link>
              
              </div>
             <div className="mt-5">
             <SearchSanityData/>
             </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
