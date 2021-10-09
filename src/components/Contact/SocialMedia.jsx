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
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li className="contact__list-item">
        <a
          href="https://www.linkedin.com/in/asgalecki/"
          target="_blank"
          className="contact__link contact__link--linkedin"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
