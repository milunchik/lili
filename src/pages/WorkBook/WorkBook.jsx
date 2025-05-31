import React, { useState } from 'react';

import styles from './WorkBook.module.css';
import { Modal } from '../../components/Modal/Modal';

export const WorkBook = () => {
  const [isButtonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(!isButtonClicked);
  };
  return (
    <section id="workbook">
      <div className={styles.workBookPageWrapper}>
        {isButtonClicked && <Modal onClose={() => setButtonClicked(false)} />}
        <div className={styles.imgContainer}>
          <img src="/images/workbook.svg" alt="WorkBook_Photo" />
        </div>

        <div className={styles.infoContainer}>
          <h1>Workbook</h1>

          <p>
            Цей унікальний воркбук створений спеціально для малюків, щоб
            навчання англійської стало справжньою пригодою. Інтерактивні
            завдання, яскраві ілюстрації та грайливий формат допомагають дітям
            легко засвоювати нові слова та вирази. Зробіть навчання захоплюючим
            – відкрийте двері у світ англійської разом із цим воркбуком!
          </p>

          <button onClick={handleClick}>Замовити</button>
        </div>
      </div>
    </section>
  );
};
