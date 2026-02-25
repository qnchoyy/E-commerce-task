import type { Product } from "../data/products";

export const renderStars = (rating: number): boolean[] => {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(rating));
  return stars;
};

export const getFinalPrice = (product: Product): number => {
  return product.discountedPrice ?? product.price;
};
