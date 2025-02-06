import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

import { Product } from "../../../../types";

interface ProductPageProps {
  params: { slug: string };
}
async function getProduct(slug: string): Promise<Product> {
  return client.fetch(groq`
    *[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      "image": image.asset->url,
      price,
      description,
      features,
      tags,
      category,
      dimensions {
        width,
        height,
        depth
      }
    }
  `, { slug });
}


export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params
  const product = await getProduct(slug);
 
  return (
    <>
      <section className="body-font overflow-hidden my-5">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex gap-10 justify-between items-center">
            {/* Image Section */}
            <div className="w-full sm:w-1/2 lg:w-[400px] mx-auto mb-6 lg:mb-0">
              <Image
                alt={product.name}
                className=" w-[400px] h-[400px] rounded"
                src={product.image ? urlFor(product.image).url() : '/placeholder-image.png'}
                width={400}
                height={400}
              />
            </div>

            {/* Product Details */}
            <div className="w-full sm:w-1/2 lg:w-1/2 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl title-font font-medium mb-1">
                {product.name}
              </h1>
              <span className="title-font font-medium text-lg sm:text-xl lg:text-2xl">
                ${product.price}
              </span>
              <br />

              {/* Rating */}
              <div className="rating rating-sm mt-2">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>

              <p className="leading-relaxed mt-4 text-sm sm:text-base">
                {product.description}
              </p>

              {/* Features */}
              <div>
                <ul className="list-disc font-bold text-sm mt-4 mb-4 pl-5">
                  {product.features &&
                    product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                </ul>
              </div>

              {/* Dimensions */}
              <div className="flex flex-wrap gap-5 mb-4">
                {product.dimensions && (
                  <>
                    <div>
                      <p className="font-bold">Width</p>
                      <p>{product.dimensions.width}</p>
                    </div>
                    <div>
                      <p className="font-bold">Height</p>
                      <p>{product.dimensions.height}</p>
                    </div>
                    <div>
                      <p className="font-bold">Depth</p>
                      <p>{product.dimensions.depth}</p>
                    </div>
                  </>
                )}
              </div>
              {/* Category */}
              {/* <div className="text-3xl font-bold">
                {product.category}
              </div> */}
              {/* Price and Add to Cart */}
              <div className="flex justify-between items-center mb-4">
             
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

