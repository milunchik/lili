import styles from './Home.module.css';
import { Header } from '../../components/Header/Header';

export const Home = () => {
  const handleClick = () => {
    document.getElementById('workbook').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="about">
      <div className={styles.homePageWrapper}>
        <Header />
        <div className={styles.homePageContainer}>
          <div className={styles.photoContainer}>
            <img src="images/main_photo.svg" alt="Profile Photo" />
          </div>

          <div className={styles.homeInfoContainer}>
            <h1>
              Отримай свій <span> крутий WorkBook</span> вже сьогодні!
            </h1>

            <p>
              Викладаю англійську з натхненням і любов’ю до слова. Допомагаю
              учням відчути впевненість у мові через творчий підхід та мій
              авторський зошит — простий, зручний і справді ефективний помічник
              у навчанні.
            </p>

            <button onClick={handleClick}>Дивитись WorkBook</button>
          </div>
        </div>
      </div>
    </section>
  );
};
