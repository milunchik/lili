import { useState } from 'react';

import styles from './Modal.module.css';

export const Modal = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // here should be logic for sending data to email
    setEmail('');
    setPhone('');
  };

  return (
    <div className={styles.modal}>
      <div className={styles.mainContent}>
        <form onSubmit={handleSubmit}>
          <h1>
            Замовити <nav>WorkBook</nav>
          </h1>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Ваш імейл"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Ваш телефон"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button type="submit">Надіслати</button>
        </form>
      </div>
    </div>
  );
};
