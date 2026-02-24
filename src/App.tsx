import { useState } from "react";
import Header from "./components/Header/Header";
import CategoryBanner from "./components/CategoryBanner/CategoryBanner";
import { categories, products } from "./data/products";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  const [activeCategory, setActiveCategory] = useState("bags");

  const currentCategory = categories.find((c) => c.id === activeCategory)!;

  return (
    <>
      <Header
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <CategoryBanner
        name={currentCategory.name}
        description={currentCategory.description}
      />
      <ProductCard product={products[0]} />
    </>
  );
}

export default App;
