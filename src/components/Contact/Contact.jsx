import { useForm, ValidationError } from '@formspree/react';
import { FaTelegramPlane } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';

import styles from './Contact.module.css';

export const Contact = () => {
  const [state, handleSubmit] = useForm('xpwradzn');

  if (state.succeeded) {
    return <p>Thanks for reaching out! I will get back to you soon.</p>;
  }

  return (
    <section id="contact">
      <div className={styles.contact__container}>
        <div className={styles.section__header}>
          <h1 className={styles.primary__title}>Напишіть мені</h1>
          <p className="text__muted description">
            Якщо у вас є запитання або пропозиції щодо співпраці — буду рада
            почути вас! Зв’яжіться зі мною за контактами.
          </p>
        </div>

        <div className={styles.contact__group}>
          <div className={styles.contact__options}>
            <article className={styles.contact__option}>
              <MdOutlineEmail className={styles.contact__icon} />
              <h3>Email</h3>
              <h5>popovich2003liliya@gmail.com</h5>
              <a
                href="mailto:popovich2003liliya@gmail.com"
                target="__blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Send a message
              </a>
            </article>
            <article className={styles.contact__option}>
              <RiMessengerLine className={styles.contact__icon} />
              <h3>Messenger</h3>
              <h5>Liliia Popovych</h5>
              <a
                href="http://m.me/profile?id=profile-id"
                target="__blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Send a message
              </a>
            </article>
            <article className={styles.contact__option}>
              <FaTelegramPlane className={styles.contact__icon} />
              <h3>Telegram</h3>
              <h5>+380507827819</h5>
              <a
                href="https://t.me/LiliiaPopovych"
                target="__blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Send a message
              </a>
            </article>
          </div>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your full name"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={7}
              placeholder="Your Message"
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              type="submit"
              disabled={state.submitting}
              className={`${styles.btn__primary} btn`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
