import type { Product } from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductGrid.module.css";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  if (products.length === 0) {
    return <p className={styles.noResults}>No products found.</p>;
  }
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
