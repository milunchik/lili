// import { Link } from 'react-scroll';

import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer id="footer">
      <div className={styles.section__wrapper}>
        <div className={styles.copyright__container}>
          <h3>Copyright &copy; All rights reserved - | 2025</h3>
          <p className={styles.text__muted}>Built by Grab Emiliia</p>
        </div>
      </div>
    </footer>
  );
};
