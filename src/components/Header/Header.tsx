import { categories } from "../../data/products";
import styles from "./Header.module.css";

interface HeaderProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const Header = ({ activeCategory, onCategoryChange }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.header}>MyShop</div>
      <nav className={styles.nav}>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`${styles.navItem} ${activeCategory === category.id ? styles.active : ""}`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
