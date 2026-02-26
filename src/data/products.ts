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
    id: 101,
    categoryId: "shoes",
    name: "Red Sport Sneakers",
    color: "red",
    price: 95,
    rating: 4.6,
    image: "https://images.pexels.com/photos/4490019/pexels-photo-4490019.jpeg",
    description: "Comfortable red athletic sneakers.",
  },
  {
    id: 102,
    categoryId: "shoes",
    name: "Blue Running Shoes",
    color: "blue",
    price: 110,
    rating: 4.8,
    image:
      "https://images.pexels.com/photos/115009/sport-shoe-running-shoe-shoe-blue-jeans-115009.jpeg",
    description: "Lightweight blue running shoes.",
  },
  {
    id: 103,
    categoryId: "shoes",
    name: "Black Leather Boots",
    color: "black",
    price: 160,
    rating: 4.7,
    image:
      "https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&w=600",
    description: "Stylish black leather boots.",
  },
  {
    id: 104,
    categoryId: "shoes",
    name: "Brown Classic Loafers",
    color: "brown",
    price: 120,
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/11985344/pexels-photo-11985344.jpeg",
    description: "Elegant brown leather loafers.",
  },
  {
    id: 105,
    categoryId: "shoes",
    name: "Gray Training Sneakers",
    color: "gray",
    price: 90,
    rating: 4.4,
    image:
      "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&w=600",
    description: "Modern gray trainers.",
  },

  {
    id: 106,
    categoryId: "shoes",
    name: "Red High Heels",
    color: "red",
    price: 130,
    rating: 4.7,
    image:
      "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&w=600",
    description: "Elegant red high heels.",
  },
  {
    id: 107,
    categoryId: "shoes",
    name: "Blue Canvas Sneakers",
    color: "blue",
    price: 75,
    rating: 4.3,
    image:
      "https://images.pexels.com/photos/15632866/pexels-photo-15632866.jpeg",
    description: "Casual blue canvas sneakers.",
  },
  {
    id: 108,
    categoryId: "shoes",
    name: "Black Formal Shoes",
    color: "black",
    price: 140,
    rating: 4.6,
    image: "https://images.pexels.com/photos/292998/pexels-photo-292998.jpeg",
    description: "Classic black formal shoes.",
  },
  {
    id: 109,
    categoryId: "shoes",
    name: "Brown Winter Boots",
    color: "brown",
    price: 170,
    rating: 4.9,
    image:
      "https://images.pexels.com/photos/15060383/pexels-photo-15060383.jpeg",
    description: "Warm brown winter boots.",
  },
  {
    id: 110,
    categoryId: "shoes",
    name: "Gray Slip-On Shoes",
    color: "gray",
    price: 85,
    rating: 4.2,
    image: "https://images.pexels.com/photos/5334362/pexels-photo-5334362.jpeg",
    description: "Comfortable gray slip-ons.",
  },

  {
    id: 111,
    categoryId: "shoes",
    name: "Red Casual Sneakers",
    color: "red",
    price: 88,
    rating: 4.5,
    image: "https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg",
    description: "Everyday red sneakers.",
  },
  {
    id: 112,
    categoryId: "shoes",
    name: "Blue Sport Trainers",
    color: "blue",
    price: 105,
    rating: 4.6,
    image: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
    description: "Blue sport training shoes.",
  },
  {
    id: 113,
    categoryId: "shoes",
    name: "Black Street Sneakers",
    color: "black",
    price: 98,
    rating: 4.4,
    image: "https://images.pexels.com/photos/684152/pexels-photo-684152.jpeg",
    description: "Urban black sneakers.",
  },
  {
    id: 114,
    categoryId: "shoes",
    name: "Brown Derby Shoes",
    color: "brown",
    price: 150,
    rating: 4.7,
    image: "https://images.pexels.com/photos/186035/pexels-photo-186035.jpeg",
    description: "Premium brown derby shoes.",
  },
  {
    id: 115,
    categoryId: "shoes",
    name: "Gray Running Shoes",
    color: "gray",
    price: 115,
    rating: 4.8,
    image: "https://images.pexels.com/photos/4719924/pexels-photo-4719924.jpeg",
    description: "Light gray running shoes.",
  },
  {
    id: 116,
    categoryId: "shoes",
    name: "Red Elegant Pumps",
    color: "red",
    price: 135,
    rating: 4.9,
    image: "https://images.pexels.com/photos/1228626/pexels-photo-1228626.jpeg",
    description: "Stylish red pumps.",
  },

  {
    id: 201,
    categoryId: "bags",
    name: "Red Leather Handbag",
    color: "red",
    price: 180,
    rating: 4.8,
    image:
      "https://images.pexels.com/photos/18458794/pexels-photo-18458794.jpeg",
    description: "Premium red leather handbag.",
  },
  {
    id: 202,
    categoryId: "bags",
    name: "Blue Travel Duffel",
    color: "blue",
    price: 145,
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/1314058/pexels-photo-1314058.jpeg?auto=compress&w=600",
    description: "Spacious blue duffel bag.",
  },
  {
    id: 203,
    categoryId: "bags",
    name: "Black Designer Tote",
    color: "black",
    price: 210,
    rating: 4.9,
    image: "https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg",
    description: "Elegant black tote bag.",
  },
  {
    id: 204,
    categoryId: "bags",
    name: "Brown Vintage Satchel",
    color: "brown",
    price: 165,
    rating: 4.7,
    image:
      "https://images.pexels.com/photos/1936848/pexels-photo-1936848.jpeg?auto=compress&w=600",
    description: "Classic brown satchel.",
  },
  {
    id: 205,
    categoryId: "bags",
    name: "Gray Laptop Bag",
    color: "gray",
    price: 120,
    rating: 4.4,
    image:
      "https://images.pexels.com/photos/19850124/pexels-photo-19850124.jpeg",
    description: "Professional gray laptop bag.",
  },

  {
    id: 206,
    categoryId: "bags",
    name: "Red Mini Purse",
    color: "red",
    price: 95,
    rating: 4.3,
    image:
      "https://images.pexels.com/photos/31551511/pexels-photo-31551511.jpeg",
    description: "Compact red purse.",
  },
  {
    id: 207,
    categoryId: "bags",
    name: "Blue Shoulder Bag",
    color: "blue",
    price: 135,
    rating: 4.6,
    image: "https://images.pexels.com/photos/9267587/pexels-photo-9267587.jpeg",
    description: "Stylish blue shoulder bag.",
  },
  {
    id: 208,
    categoryId: "bags",
    name: "Black Backpack",
    color: "black",
    price: 140,
    rating: 4.7,
    image: "https://images.pexels.com/photos/843194/pexels-photo-843194.jpeg",
    description: "Modern black backpack.",
  },
  {
    id: 209,
    categoryId: "bags",
    name: "Brown Leather Tote",
    color: "brown",
    price: 175,
    rating: 4.8,
    image:
      "https://images.pexels.com/photos/26965826/pexels-photo-26965826.jpeg",
    description: "Large brown leather tote.",
  },
  {
    id: 210,
    categoryId: "bags",
    name: "Gray Crossbody Bag",
    color: "gray",
    price: 100,
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/22434756/pexels-photo-22434756.jpeg",
    description: "Light gray crossbody bag.",
  },

  {
    id: 211,
    categoryId: "bags",
    name: "Red Evening Clutch",
    color: "red",
    price: 125,
    rating: 4.7,
    image:
      "https://images.pexels.com/photos/19869754/pexels-photo-19869754.jpeg",
    description: "Elegant red clutch.",
  },
  {
    id: 212,
    categoryId: "bags",
    name: "Blue Weekend Bag",
    color: "blue",
    price: 155,
    rating: 4.6,
    image:
      "https://images.pexels.com/photos/26756769/pexels-photo-26756769.jpeg",
    description: "Blue travel weekend bag.",
  },
  {
    id: 213,
    categoryId: "bags",
    name: "Black Leather Bag",
    color: "black",
    price: 190,
    rating: 4.9,
    image:
      "https://images.pexels.com/photos/22432986/pexels-photo-22432986.jpeg",
    description: "Premium black leather bag.",
  },
  {
    id: 214,
    categoryId: "bags",
    name: "Brown Messenger Bag",
    color: "brown",
    price: 160,
    rating: 4.6,
    image: "https://images.pexels.com/photos/8148587/pexels-photo-8148587.jpeg",
    description: "Classic brown messenger bag.",
  },
  {
    id: 215,
    categoryId: "bags",
    name: "Gray Travel Tote",
    color: "gray",
    price: 115,
    rating: 4.4,
    image: "https://images.pexels.com/photos/45981/pexels-photo-45981.jpeg",
    description: "Spacious gray tote bag.",
  },
  {
    id: 216,
    categoryId: "bags",
    name: "Red Fashion Handbag",
    color: "red",
    price: 185,
    rating: 4.8,
    image:
      "https://images.pexels.com/photos/13596382/pexels-photo-13596382.jpeg",
    description: "Stylish red fashion handbag.",
  },

  {
    id: 301,
    categoryId: "accessories",
    name: "Black Sunglasses",
    color: "black",
    price: 75,
    rating: 4.6,
    image:
      "https://images.pexels.com/photos/13119234/pexels-photo-13119234.jpeg",
    description: "Classic black sunglasses.",
  },
  {
    id: 302,
    categoryId: "accessories",
    name: "Brown Leather Wallet",
    color: "brown",
    price: 60,
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/32954513/pexels-photo-32954513.jpeg",
    description: "Slim brown leather wallet.",
  },
  {
    id: 303,
    categoryId: "accessories",
    name: "Red Winter Scarf",
    color: "red",
    price: 40,
    rating: 4.4,
    image:
      "https://images.pexels.com/photos/35140371/pexels-photo-35140371.jpeg",
    description: "Warm red winter scarf.",
  },
  {
    id: 304,
    categoryId: "accessories",
    name: "Blue Silk Tie",
    color: "blue",
    price: 55,
    rating: 4.3,
    image: "https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg",
    description: "Elegant blue silk tie.",
  },
  {
    id: 305,
    categoryId: "accessories",
    name: "Gray Wool Hat",
    color: "gray",
    price: 50,
    rating: 4.4,
    image:
      "https://images.pexels.com/photos/14491265/pexels-photo-14491265.jpeg",
    description: "Cozy gray wool hat.",
  },

  {
    id: 306,
    categoryId: "accessories",
    name: "Black Leather Belt",
    color: "black",
    price: 65,
    rating: 4.6,
    image:
      "https://images.pexels.com/photos/10340815/pexels-photo-10340815.jpeg",
    description: "Premium black leather belt.",
  },
  {
    id: 307,
    categoryId: "accessories",
    name: "Brown Watch",
    color: "brown",
    price: 130,
    rating: 4.7,
    image:
      "https://images.pexels.com/photos/68201/male-watch-wrist-watch-packshot-time-68201.jpeg",
    description: "Elegant brown wrist watch.",
  },
  {
    id: 308,
    categoryId: "accessories",
    name: "Red Beanie",
    color: "red",
    price: 35,
    rating: 4.2,
    image: "https://images.pexels.com/photos/5273711/pexels-photo-5273711.jpeg",
    description: "Warm red knit beanie.",
  },
  {
    id: 309,
    categoryId: "accessories",
    name: "Blue Cap",
    color: "blue",
    price: 30,
    rating: 4.1,
    image:
      "https://images.pexels.com/photos/29926576/pexels-photo-29926576.jpeg",
    description: "Casual blue baseball cap.",
  },
  {
    id: 310,
    categoryId: "accessories",
    name: "Gray Gloves",
    color: "gray",
    price: 45,
    rating: 4.3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkBR92RfNemp1nIdTeqElIIVVViixLFoWMPg&s",
    description: "Soft gray winter gloves.",
  },

  {
    id: 311,
    categoryId: "accessories",
    name: "Black Bracelet",
    color: "black",
    price: 48,
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/12915487/pexels-photo-12915487.jpeg",
    description: "Modern black bracelet.",
  },
  {
    id: 312,
    categoryId: "accessories",
    name: "Brown Key Holder",
    color: "brown",
    price: 25,
    rating: 4.2,
    image:
      "https://www.tods.com/fashion/tods/XAMGRE40200RLXS410/XAMGRE40200RLXS410-01.jpg?imwidth=475",
    description: "Brown leather key holder.",
  },
  {
    id: 313,
    categoryId: "accessories",
    name: "Red Fashion Belt",
    color: "red",
    price: 55,
    rating: 4.4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFSiWRHZiVgBJzn-nuuG3tRBJRVS8o5fleAw&s",
    description: "Stylish red belt.",
  },
  {
    id: 314,
    categoryId: "accessories",
    name: "Blue Scarf",
    color: "blue",
    price: 42,
    rating: 4.3,
    image:
      "https://images.pexels.com/photos/21879356/pexels-photo-21879356.jpeg?auto=compress&w=600",
    description: "Soft blue scarf.",
  },
  {
    id: 315,
    categoryId: "accessories",
    name: "Gray Sunglasses",
    color: "gray",
    price: 70,
    rating: 4.6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnj7kwat6MNN-p9eK1DDJDXjFAmn0-cGfJVA&s",
    description: "Modern gray sunglasses.",
  },
  {
    id: 316,
    categoryId: "accessories",
    name: "Black Elegant Watch",
    color: "black",
    price: 150,
    rating: 4.9,
    image:
      "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&w=600",
    description: "Luxury black wrist watch.",
  },
];
