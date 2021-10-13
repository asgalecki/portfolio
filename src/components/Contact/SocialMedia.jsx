import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
  return (
    <ul className="contact__social-media">
      <li className="contact__list-item">
        <a
          href="https://github.com/asgalecki"
          target="_blank"
          rel="noreferrer noopener"
          className="contact__link  contact__link--github"
          aria-label="Link to my GitHub profile"
        >
          <FontAwesomeIcon icon={faGithub} alt="" />
        </a>
      </li>
      <li className="contact__list-item">
        <a
          href="https://www.linkedin.com/in/asgalecki/"
          target="_blank"
          rel="noreferrer noopener"
          className="contact__link contact__link--linkedin"
          aria-label="Link to my LinkedIn profile"
        >
          <FontAwesomeIcon icon={faLinkedin} alt="" />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
