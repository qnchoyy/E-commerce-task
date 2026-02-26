import toast from "react-hot-toast";
import type { Product } from "../../data/products";
import { renderStars } from "../../utils/helpers";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.price}>
          {product.discountedPrice ? (
            <>
              <span className={styles.discounted}>
                €{product.discountedPrice}
              </span>
              <span className={styles.original}>€{product.price}</span>
            </>
          ) : (
            <span>€{product.price}</span>
          )}
        </div>
        <div className={styles.rating}>
          {renderStars(product.rating).map((filled, i) => (
            <span
              key={i}
              className={filled ? styles.starFilled : styles.starEmpty}
            >
              ★
            </span>
          ))}
          <span className={styles.ratingValue}>({product.rating})</span>
        </div>
      </div>
      <button
        className={styles.addToCart}
        onClick={() => toast.success(`${product.name} added to cart!`)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
