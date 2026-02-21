export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Product {
  id: number;
  categoryId: string;
  name: string;
  image: string;
  description: string;
  price: number;
  discountedPrice?: number;
  rating: number;
  color: string;
}

export const categories: Category[] = [
  {
    id: "bags",
    name: "Bags",
    description:
      "Discover our curated collection of premium bags, crafted for style and everyday functionality.",
  },
  {
    id: "shoes",
    name: "Shoes",
    description:
      "Step into comfort and elegance with our latest footwear collection.",
  },
  {
    id: "accessories",
    name: "Accessories",
    description:
      "Complete your look with our carefully selected accessories, from scarves to sunglasses.",
  },
];

export const products: Product[] = [
  {
    id: 1,
    categoryId: "bags",
    name: "Leather Tote Bag",
    description: "Spacious full-grain leather tote, perfect for daily use.",
    price: 120,
    discountedPrice: 89,
    rating: 4.5,
    color: "brown",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80",
  },
  {
    id: 2,
    categoryId: "bags",
    name: "Canvas Backpack",
    description: "Lightweight canvas backpack with multiple compartments.",
    price: 75,
    rating: 4.2,
    color: "beige",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",
  },
  {
    id: 3,
    categoryId: "bags",
    name: "Mini Crossbody",
    description: "Compact crossbody bag ideal for evenings out.",
    price: 55,
    discountedPrice: 39,
    rating: 4.7,
    color: "black",
    image:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&q=80",
  },
  {
    id: 4,
    categoryId: "bags",
    name: "Suede Clutch",
    description: "Elegant suede clutch for formal occasions.",
    price: 65,
    rating: 4.0,
    color: "beige",
    image:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&q=80",
  },
  {
    id: 5,
    categoryId: "bags",
    name: "Gym Duffel Bag",
    description: "Durable duffel bag with shoe compartment.",
    price: 90,
    rating: 4.3,
    color: "black",
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=400&q=80",
  },
  {
    id: 6,
    categoryId: "bags",
    name: "Straw Beach Bag",
    description: "Handwoven straw tote, perfect for the beach.",
    price: 45,
    discountedPrice: 35,
    rating: 4.1,
    color: "beige",
    image:
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400&q=80",
  },
  {
    id: 7,
    categoryId: "bags",
    name: "Structured Satchel",
    description: "Classic structured satchel with gold hardware.",
    price: 145,
    rating: 4.6,
    color: "brown",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80",
  },
  {
    id: 8,
    categoryId: "bags",
    name: "Travel Weekender",
    description: "Large weekender bag with leather handles.",
    price: 160,
    discountedPrice: 130,
    rating: 4.8,
    color: "brown",
    image:
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=400&q=80",
  },
  {
    id: 9,
    categoryId: "shoes",
    name: "White Leather Sneakers",
    description: "Clean minimalist sneakers for everyday wear.",
    price: 95,
    rating: 4.6,
    color: "white",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
  },
  {
    id: 10,
    categoryId: "shoes",
    name: "Suede Chelsea Boots",
    description: "Sleek chelsea boots in premium suede.",
    price: 175,
    discountedPrice: 140,
    rating: 4.7,
    color: "brown",
    image:
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400&q=80",
  },
  {
    id: 11,
    categoryId: "shoes",
    name: "Strappy Sandals",
    description: "Elegant strappy sandals with block heel.",
    price: 80,
    rating: 4.3,
    color: "beige",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80",
  },
  {
    id: 12,
    categoryId: "shoes",
    name: "Running Shoes",
    description: "Lightweight and responsive running shoes.",
    price: 110,
    discountedPrice: 85,
    rating: 4.5,
    color: "white",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
  },
  {
    id: 13,
    categoryId: "shoes",
    name: "Leather Loafers",
    description: "Classic leather loafers for smart casual looks.",
    price: 130,
    rating: 4.4,
    color: "brown",
    image:
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&q=80",
  },
  {
    id: 14,
    categoryId: "shoes",
    name: "Black Ankle Boots",
    description: "Versatile ankle boots that go with everything.",
    price: 155,
    rating: 4.8,
    color: "black",
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&q=80",
  },
  {
    id: 15,
    categoryId: "shoes",
    name: "Slip-On Mules",
    description: "Effortless slip-on mules in soft leather.",
    price: 70,
    discountedPrice: 55,
    rating: 4.2,
    color: "beige",
    image:
      "https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?w=400&q=80",
  },
  {
    id: 16,
    categoryId: "shoes",
    name: "High-Top Sneakers",
    description: "Bold high-top sneakers with chunky sole.",
    price: 120,
    rating: 4.1,
    color: "black",
    image:
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&q=80",
  },
  {
    id: 17,
    categoryId: "accessories",
    name: "Silk Scarf",
    description: "Lightweight silk scarf with floral print.",
    price: 45,
    discountedPrice: 35,
    rating: 4.5,
    color: "beige",
    image:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&q=80",
  },
  {
    id: 18,
    categoryId: "accessories",
    name: "Leather Belt",
    description: "Full-grain leather belt with silver buckle.",
    price: 55,
    rating: 4.3,
    color: "brown",
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400&q=80",
  },
  {
    id: 19,
    categoryId: "accessories",
    name: "Sunglasses",
    description: "UV400 polarized sunglasses with acetate frame.",
    price: 85,
    discountedPrice: 65,
    rating: 4.6,
    color: "black",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80",
  },
  {
    id: 20,
    categoryId: "accessories",
    name: "Wool Beanie",
    description: "Soft merino wool beanie for cold days.",
    price: 35,
    rating: 4.4,
    color: "beige",
    image:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&q=80",
  },
  {
    id: 21,
    categoryId: "accessories",
    name: "Silver Necklace",
    description: "Delicate sterling silver pendant necklace.",
    price: 70,
    rating: 4.7,
    color: "white",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
  },
  {
    id: 22,
    categoryId: "accessories",
    name: "Leather Gloves",
    description: "Lined leather gloves with cashmere interior.",
    price: 95,
    discountedPrice: 75,
    rating: 4.2,
    color: "brown",
    image:
      "https://images.unsplash.com/photo-1545594861-3bef43ff621e?w=400&q=80",
  },
  {
    id: 23,
    categoryId: "accessories",
    name: "Canvas Hat",
    description: "Wide-brim canvas hat, perfect for summer.",
    price: 40,
    rating: 4.0,
    color: "beige",
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80",
  },
  {
    id: 24,
    categoryId: "accessories",
    name: "Aviator Sunglasses",
    description: "Classic metal aviator frames with gradient lenses.",
    price: 110,
    rating: 4.5,
    color: "black",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80",
  },
];
