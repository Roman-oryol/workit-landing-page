import Feature from './Feature';
import styles from './Features.module.scss';

const features = [
  {
    id: 1,
    title: 'Actionable insights',
    description:
      'Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.',
  },
  {
    id: 2,
    title: 'Data-driven decisions',
    description:
      'Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.',
  },
  {
    id: 3,
    title: 'Always affordable',
    description:
      'Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.',
  },
];

const Features = () => {
  return (
    <section className={styles.features}>
      <ul className={`${styles.featuresList} container`}>
        {features.map(({ id, title, description }, index) => {
          return (
            <li key={id} data-aos="fade-up" data-aos-delay={index * 300}>
              <Feature title={title} number={id}>
                {description}
              </Feature>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Features;
