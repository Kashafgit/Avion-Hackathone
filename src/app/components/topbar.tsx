import { ShoppingCart, User2Icon, Menu } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import SearchSanityData from "./searchBar";
import CategoryDropdown from "./category";
// import SearchSanityData from "./searchbar";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center  px-10 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-3xl font-bold">
        <Link href="/">Avion</Link>
      </div>

      {/* Navigation - Large Screens */}
      <div className="hidden md:flex gap-5 items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/all-products">All Products</Link>
        <CategoryDropdown/>
      </div>

      {/* Icons + Mobile Menu */}
      <div className="flex gap-5 items-center">
        {/* <SearchSanityData/> */}
        <SearchSanityData/>
   <Link href={"./cart"}> <ShoppingCart /></Link>
        <User2Icon />

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
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
