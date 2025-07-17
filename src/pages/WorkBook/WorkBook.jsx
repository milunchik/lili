import React, { useState } from 'react';

import styles from './WorkBook.module.css';
import { Modal } from '../../components/Modal/Modal';
import { Payment } from '../../components/Payment/Payment';

export const WorkBook = () => {
  const [isButtonClicked, setButtonClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = () => {
    setButtonClicked(true);
  };

  const handleSuccess = () => {
    setIsSuccess(true);
    setButtonClicked(false);
    setIsVisible(false);
  };

  if (isSuccess) {
    return <Payment />;
  }

  return (
    <section id="workbook">
      <div className={styles.workBookPageWrapper}>
        {isButtonClicked && (
          <Modal
            onClose={() => setButtonClicked(false)}
            onSuccess={handleSuccess}
          />
        )}
        <div className={styles.imgContainer}>
          <img src="/images/workbook.png" alt="WorkBook_Photo" />
        </div>
        {isVisible && (
          <div className={styles.infoContainer}>
            <h1>Workbook</h1>

            <p>
              English Escape — це унікальний онлайн воркбук у стилі квесту, де
              кожен день — це новий рівень із завданнями, загадками, картами та
              секретними повідомленнями. Ідеально підходить для учнів рівня В1,
              які хочуть практикувати англійську у цікавому форматі.
            </p>

            <button onClick={handleClick}>Замовити</button>
          </div>
        )}
      </div>
    </section>
  );
};
