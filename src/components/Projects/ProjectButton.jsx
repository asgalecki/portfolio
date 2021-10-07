import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const ProjectButton = ({ data, text, modifier }) => {
  return (
    <li className="project-details__button">
      <a
        href={
          modifier === 'github'
            ? data.frontmatter.repo
            : data.frontmatter.website
        }
        className="project-details__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className={`project-details__button project-details__button--${modifier}`}
        >
          <FontAwesomeIcon icon={modifier === 'github' ? faGithub : faGlobe} />
          {` ${text}`}
        </button>
      </a>
    </li>
  );
};

export default ProjectButton;
