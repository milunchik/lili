import { useForm, ValidationError } from '@formspree/react';
import PropTypes from 'prop-types';
import React from 'react';
import { IoIosCloseCircle } from 'react-icons/io';

import styles from './Modal.module.css';

export const Modal = ({ onClose, onSuccess }) => {
  const [state, handleSubmit] = useForm('xpwradzn');

  if (state.succeeded) {
    onSuccess();
    return null;
  }

  return (
    <div className={styles.modal} onClick={() => onClose()}>
      <button className={styles.closeButton} onClick={onClose}>
        <IoIosCloseCircle />
      </button>
      <div className={styles.mainContent} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          {/* <h1>
            Замовити <nav>WorkBook</nav>
          </h1> */}

          <h2>
            Воркбук можна отримати за внесок <nav> 199 </nav> грн.
          </h2>

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
            Замовити
          </button>
          <h2> Надішліть свої дані, а ми надішлемо вам файл!</h2>
        </form>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
};
