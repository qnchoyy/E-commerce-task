import styles from "./FilterPanel.module.css";

interface FilterPanelProps {
  availableColors: string[];
  selectedColors: string[];
  maxPrice: number;
  onColorChange: (color: string) => void;
  onPriceChange: (price: number) => void;
}

const FilterPanel = ({
  availableColors,
  selectedColors,
  maxPrice,
  onColorChange,
  onPriceChange,
}: FilterPanelProps) => {
  return (
    <div className={styles.panel}>
      <h3 className={styles.title}>Filters</h3>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Color</h4>
        {availableColors.map((color) => (
          <label key={color} className={styles.colorLabel}>
            <input
              type="checkbox"
              checked={selectedColors.includes(color)}
              onChange={() => onColorChange(color)}
            />
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </label>
        ))}
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Max Price</h4>
        <input
          type="range"
          min={0}
          max={300}
          value={maxPrice}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className={styles.slider}
        />
        <p className={styles.priceValue}>Up to €{maxPrice}</p>
      </div>
    </div>
  );
};

export default FilterPanel;
