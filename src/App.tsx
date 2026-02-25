import { useState } from "react";
import Header from "./components/Header/Header";
import CategoryBanner from "./components/CategoryBanner/CategoryBanner";
import { categories, products } from "./data/products";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import { PRODUCTS_PER_PAGE } from "./constants/constants";
import styles from "./App.module.css";

function App() {
  const [activeCategory, setActiveCategory] = useState("bags");
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);

  const currentCategory = categories.find((c) => c.id === activeCategory)!;
  const filteredProducts = products.filter(
    (p) => p.categoryId === activeCategory,
  );
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PRODUCTS_PER_PAGE);
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setVisibleCount(PRODUCTS_PER_PAGE);
  };

  return (
    <>
      <Header
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <CategoryBanner
        name={currentCategory.name}
        description={currentCategory.description}
        shownProducts={visibleProducts.length}
        totalCount={filteredProducts.length}
      />
      <ProductGrid products={visibleProducts} />
      {visibleCount < filteredProducts.length && (
        <div className={styles.loadMoreWrapper}>
          <button className={styles.loadMoreBtn} onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </>
  );
}

export default App;
