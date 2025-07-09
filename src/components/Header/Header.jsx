import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <a href="#about" className={styles.navItem}>
          ПРО МЕНЕ
        </a>
        <a href="#workbook" className={styles.navItem}>
          ПРО ВОРКБУК
        </a>
        <a href="#contact" className={styles.navItem}>
          КОНТАКТИ
        </a>
      </nav>
    </div>
  );
};
