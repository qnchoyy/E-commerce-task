import styles from "./CategoryBanner.module.css";

interface CategoryBannerProps {
  name: string;
  description: string;
  shownProducts: number;
  totalCount: number;
}

const CategoryBanner = ({
  name,
  description,
  shownProducts,
  totalCount,
}: CategoryBannerProps) => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.description}>{description}</p>
      <p className={styles.counter}>
        {shownProducts} products shown of total {totalCount} products
      </p>
    </div>
  );
};

export default CategoryBanner;
