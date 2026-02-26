import { useState } from "react";
import Header from "./components/Header/Header";
import CategoryBanner from "./components/CategoryBanner/CategoryBanner";
import { categories, products } from "./data/products";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import { PRODUCTS_PER_PAGE } from "./constants/constants";
import styles from "./App.module.css";
import SortDropdown from "./components/SortDropdown/SortDropdown";
import { getFinalPrice } from "./utils/helpers";
import FilterPanel from "./components/FilterPanel/FilterPanel";
import Footer from "./components/Footer/Footer";

function App() {
  const [activeCategory, setActiveCategory] = useState("bags");
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);
  const [sortBy, setSortBy] = useState("default");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(300);

  const currentCategory = categories.find((c) => c.id === activeCategory)!;
  const filteredProducts = products.filter(
    (p) => p.categoryId === activeCategory,
  );

  const colorAndPriceFiltered = filteredProducts.filter((p) => {
    const colorMatch =
      selectedColors.length === 0 || selectedColors.includes(p.color);
    const priceMatch = getFinalPrice(p) <= maxPrice;
    return colorMatch && priceMatch;
  });

  const sortedProducts = [...colorAndPriceFiltered].sort((a, b) => {
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
    setMaxPrice(300);
    setSelectedColors([]);
  };

  const handleColorChange = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color],
    );
  };

  const availableColors = [...new Set(filteredProducts.map((p) => p.color))];

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
        totalCount={colorAndPriceFiltered.length}
      />
      <div className={styles.mainLayout}>
        <FilterPanel
          availableColors={availableColors}
          selectedColors={selectedColors}
          maxPrice={maxPrice}
          onColorChange={handleColorChange}
          onPriceChange={setMaxPrice}
        />
        <div className={styles.content}>
          <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />
          <ProductGrid products={visibleProducts} />
          {visibleCount < colorAndPriceFiltered.length && (
            <div className={styles.loadMoreWrapper}>
              <button className={styles.loadMoreBtn} onClick={handleLoadMore}>
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
