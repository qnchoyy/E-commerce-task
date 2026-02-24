export const renderStars = (rating: number): boolean[] => {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(rating));
  return stars;
};
