import React from 'react';

export const Payment = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Дякую, що цінуєш авторський контент 🙏</h2>

      <div style={styles.box}>
        <p style={styles.text}>Твоя підтримка допомагає створювати більше!</p>
        <a
          href="https://send.monobank.ua/jar/A6FYebSYnv"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          🔗 Перейти до банки Monobank
        </a>

        <p style={styles.cardInfo}>
          💳 Номер картки банки: <strong>4441 1111 2615 3646</strong>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '30px 20px',
    margin: '320px',
    fontFamily: 'sans-serif',
  },
  heading: {
    fontSize: '1.8rem',
    marginBottom: '20px',
  },
  box: {
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  text: {
    marginBottom: '10px',
    fontSize: '1rem',
  },
  link: {
    display: 'inline-block',
    marginBottom: '10px',
    fontSize: '1.1rem',
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  cardInfo: {
    fontSize: '1rem',
    color: '#444',
  },
};
