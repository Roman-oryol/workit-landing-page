import styles from './SocialLink.module.scss';

const SocialLink = ({ href, children, title }) => {
  return (
    <a className={styles.socialLink} href={href}>
      <span className="visually-hidden">{title}</span>
      {children}
    </a>
  );
};

export default SocialLink;
