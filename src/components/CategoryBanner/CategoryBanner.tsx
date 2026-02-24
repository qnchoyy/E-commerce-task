import styles from "./CategoryBanner.module.css";

interface CategoryBannerProps {
  name: string;
  description: string;
}

const CategoryBanner = ({ name, description }: CategoryBannerProps) => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default CategoryBanner;
