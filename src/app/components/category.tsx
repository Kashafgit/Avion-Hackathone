"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { allCategoriesQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

const CategoryDropdown = () => {
  const [categories, setCategories] = useState<{ name: string; slug: string }[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await client.fetch(allCategoriesQuery);
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div >
      <select
        onChange={(e) => {
          if (e.target.value) {
            router.push(`/category/${e.target.value}`);
          }
        }}
        className="border p-2 rounded"
      >
        <option value="">Select a Category</option>
        {categories.map((category) => (
          <option key={category.slug} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropdown;