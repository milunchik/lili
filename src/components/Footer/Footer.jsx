import { Link } from 'react-scroll';

import styles from './Footer.module.css';
import { menu, socialHandles } from '../../../data';

export const Footer = () => {
  return (
    <footer id="footer">
      <div className={styles.section__wrapper}>
        <div className={styles.nav__link__container}>
          {menu.map((list, index) => (
            <Link
              className={styles.tab__itemName}
              to={list.name.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={index}
            >
              {list.name}
            </Link>
          ))}
        </div>
        <div className={styles.social__handles__container}>
          {socialHandles.map((list, index) => (
            <a
              href={list.link}
              className={styles.social__handles}
              target="_blank"
              key={index}
              rel="noreferrer"
            >
              {list.icon}
            </a>
          ))}
        </div>
        <div className={styles.copyright__container}>
          <h3>Copyright &copy; All rights reserved - | 2025</h3>
          <p className={styles.text__muted}>Built by Grab Emiliia</p>
        </div>
      </div>
    </footer>
  );
};
