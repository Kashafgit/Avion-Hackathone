import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

import { Product } from "../../../../types";
import Swal from "sweetalert2";
import { addToCart } from "@/app/actions/actions";

interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`
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
  `,
    { slug }
  );
}


export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProduct(slug);

  return (
    <>
      <section className="body-font overflow-hidden my-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col lg:flex-row gap-8 justify-between items-center">
            {/* Image Section */}
            <div className="w-full sm:w-3/4 md:w-1/2 lg:w-[400px] mx-auto">
              <Image
                alt={product.name}
                className="w-full sm:w-[350px] md:w-[400px] h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded"
                src={product.image ? urlFor(product.image).url() : "/placeholder-image.png"}
                width={400}
                height={400}
              />
            </div>

            {/* Product Details */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 text-center lg:text-left">
                {product.name}
              </h1>
              <span className="title-font font-bold text-lg sm:text-xl lg:text-2xl block text-center lg:text-left">
                ${product.price}
              </span>

              {/* Rating */}
              <div className="rating rating-sm mt-2 flex justify-center lg:justify-start">
                {[...Array(5)].map((_, index) => (
                  <input
                    key={index}
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked={index === 1} // Default checked on 2nd star
                  />
                ))}
              </div>

              <p className="leading-relaxed mt-4 text-sm sm:text-base text-center lg:text-left">
                {product.description}
              </p>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div>
                  <ul className="list-disc font-bold text-sm mt-4 mb-4 pl-5">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Dimensions */}
              {product.dimensions && (
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-4">
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
                </div>
              )}

             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
