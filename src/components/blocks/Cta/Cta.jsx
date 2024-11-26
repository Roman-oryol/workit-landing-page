import { useState, useRef, useEffect } from 'react';
import Button from '../../ui/Button/Button';
import styles from './Cta.module.scss';

const Cta = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.75 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section className={`${styles.cta} container`}>
      <img
        className="headshot"
        src="/images/image-founder.webp"
        width={280}
        height={280}
        alt="Portrait of Louis Graham, founder of the company"
      />
      <div
        ref={contentRef}
        className={`${styles.content} ${
          isVisible ? styles.visible : styles.hidden
        }`}
      >
        <h2 className="text-preset-2">Be the first to test</h2>
        <p className="text-preset-4">
          Hi, I'm Louis Graham, the founder of the company. Book a demo call
          with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I’ll be in touch to schedule a
          call.
        </p>
        <Button className="button-primary">Apply for access</Button>
      </div>
    </section>
  );
};

export default Cta;
