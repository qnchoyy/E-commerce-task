import { useState } from "react";
import Header from "./components/Header/Header";
import CategoryBanner from "./components/CategoryBanner/CategoryBanner";
import { categories, products } from "./data/products";
import ProductGrid from "./components/ProductGrid/ProductGrid";

function App() {
  const [activeCategory, setActiveCategory] = useState("bags");

  const currentCategory = categories.find((c) => c.id === activeCategory)!;
  const filteredProducts = products.filter(
    (p) => p.categoryId === activeCategory,
  );

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
      <ProductGrid products={filteredProducts} />
    </>
  );
}

export default App;
