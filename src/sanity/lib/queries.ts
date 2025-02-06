import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "product"]{
 _id,
   name,
   description,
   "categoryName": category->title,
   "image": image.asset->url,
   price,
   quantity,
   dimensions,
   features,
   tags,
   "slug": slug.current 

}`
export const fourProducts = groq`*[_type == "product"][0..3]{
 _id,
   name,
   description,
   "categoryName": category->title,
   "image": image.asset->url,
   price,
   quantity,
   dimensions,
   features,
   tags,
   "slug": slug.current 

}`
export const popularProducts = groq`*[_type == "product"][5..8]{
 _id,
   name,
   description,
   "categoryName": category->title,
   "image": image.asset->url,
   price,
   quantity,
   dimensions,
   features,
   tags,
   "slug": slug.current 

}`
export const allCategoriesQuery = `*[_type == "category"]{name, "slug": slug.current}`;
export const productsByCategoryQuery = (categorySlug: string) => `*[_type == "product" && category->slug.current == "${categorySlug}"]{
  _id, name, slug, price, image, quantity, description, category->{name, slug}
}`;
