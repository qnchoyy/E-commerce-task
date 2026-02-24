import { useState } from "react";
import Header from "./components/Header/Header";
import CategoryBanner from "./components/CategoryBanner/CategoryBanner";
import { categories } from "./data/products";

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
    </>
  );
}

export default App;
