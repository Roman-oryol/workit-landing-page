import Button from '../../ui/Button/Button';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={`${styles.nav} container`}>
      <img
        src="/images/logo-light.svg"
        width={97}
        height={26}
        alt="Workit Logo"
      />
      <Button href="#nowere" className="button-secondary">
        Apply for access
      </Button>
    </nav>
  );
};

export default Nav;
