import Socials from '../../blocks/Socials/Socials';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img
        src="/images/logo-dark.svg"
        width={96}
        height={25}
        alt="Workit Logo"
      />
      <Socials />
    </footer>
  );
};

export default Footer;
