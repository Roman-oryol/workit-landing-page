import Button from '../../ui/Button/Button';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={`${styles.hero} container`}>
      <h2 className="text-preset-1">
        Data <span className={styles.underlined}>tailored</span> to
        <br /> your needs.
      </h2>
      <Button href="#nowere" className="button-primary">
        Learn more
      </Button>
    </section>
  );
};

export default Hero;
