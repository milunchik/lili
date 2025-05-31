import { useForm, ValidationError } from '@formspree/react';
import PropTypes from 'prop-types';
import React from 'react';
import { IoIosCloseCircle } from 'react-icons/io';

import styles from './Modal.module.css';

export const Modal = ({ onClose }) => {
  const [state, handleSubmit] = useForm('xpwradzn');
  if (state.succeeded) {
    return <p>Thanks for buying!</p>;
    //should be replace by logic of payment
  }

  return (
    <div className={styles.modal} onClick={() => onClose()}>
      <button className={styles.closeButton} onClick={onClose}>
        <IoIosCloseCircle />
      </button>
      <div className={styles.mainContent} onClick={(e) => e.stopPropagation()}>
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
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <input
            type="text"
            name="message"
            id="phone"
            placeholder="Ваш телефон"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
