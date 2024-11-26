import styles from './Feature.module.scss';

const Feature = ({ number, title, children }) => {
  return (
    <div className={styles.feature}>
      <div className={styles.number}>{number}</div>
      <div>
        <h2 className={`${styles.title} text-preset-3`}>{title}</h2>
        <div className={`${styles.description} text-preset-4`}>{children}</div>
      </div>
    </div>
  );
};

export default Feature;
