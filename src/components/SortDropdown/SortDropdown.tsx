import styles from "./SortDropdown.module.css";

interface SortDropdownProps {
  sortBy: string;
  onSortChange: (value: string) => void;
}
const SortDropdown = ({ sortBy, onSortChange }: SortDropdownProps) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>Sort by</label>
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className={styles.select}
      >
        <option value="default">Default</option>
        <option value="name-asc">Name: A-Z</option>
        <option value="name-desc">Name: Z-A</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortDropdown;
