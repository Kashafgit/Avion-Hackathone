export interface Product {
  _id: string;
  name: string;
  price: number;
  _type: "product";
  quantity: number;
  image?: {
    _type: "image";
    _ref: string;  // The reference to the image stored in Sanity
  };
  description: string;
  features?: string[];  // Optional
  dimensions?: {        // Optional
    width: string;
    height: string;
    depth: string;
  };
  categoryName: string; // Updated to match query
  slug: {
    _type: "slug";
    current: string;
  };
}
