import styles from './Button.module.scss';

const Button = ({ children, href, className }) => {
  return (
    <a
      className={`${styles.button} ${styles[className]} text-preset-5`}
      href={href}
    >
      {children}
    </a>
  );
};

export default Button;
