import { useState } from "react";
import Header from "./components/Header/Header";
import CategoryBanner from "./components/CategoryBanner/CategoryBanner";
import { categories, products } from "./data/products";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import { PRODUCTS_PER_PAGE } from "./constants/constants";
import styles from "./App.module.css";
import SortDropdown from "./components/SortDropdown/SortDropdown";
import { getFinalPrice } from "./utils/helpers";

function App() {
  const [activeCategory, setActiveCategory] = useState("bags");
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);
  const [sortBy, setSortBy] = useState("default");

  const currentCategory = categories.find((c) => c.id === activeCategory)!;
  const filteredProducts = products.filter(
    (p) => p.categoryId === activeCategory,
  );
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "name-asc") return a.name.localeCompare(b.name);
    if (sortBy === "name-desc") return b.name.localeCompare(a.name);
    if (sortBy === "price-asc") return getFinalPrice(a) - getFinalPrice(b);
    if (sortBy === "price-desc") return getFinalPrice(b) - getFinalPrice(a);
    return 0;
  });

  const visibleProducts = sortedProducts.slice(0, visibleCount);

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
      <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />
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
