import SocialLink from './SocialLink';
import FacebookIcon from '../../../assets/images/icon-facebook.svg?react';
import InstagramIcon from '../../../assets/images/icon-instagram.svg?react';
import TwitterIcon from '../../../assets/images/icon-twitter.svg?react';

import styles from './Socials.module.scss';

const Socials = () => {
  return (
    <div className={styles.socials}>
      <SocialLink href="#" title="facebook">
        <FacebookIcon />
      </SocialLink>
      <SocialLink href="#" title="twitter">
        <TwitterIcon />
      </SocialLink>
      <SocialLink href="#" title="instagram">
        <InstagramIcon />
      </SocialLink>
    </div>
  );
};

export default Socials;
