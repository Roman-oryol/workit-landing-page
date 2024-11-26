import Nav from '../../blocks/Nav/Nav';
import Hero from '../../blocks/Hero/Hero';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Nav />
      <Hero />
    </header>
  );
};

export default Header;
