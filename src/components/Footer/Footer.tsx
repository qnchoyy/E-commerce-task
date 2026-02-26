import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="#" className={styles.link}>
          Terms & Conditions
        </a>
        <a href="#" className={styles.link}>
          Privacy Policy
        </a>
        <a href="#" className={styles.link}>
          Contact Us
        </a>
      </div>
      <p className={styles.copy}>© 2025 MyShop. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
