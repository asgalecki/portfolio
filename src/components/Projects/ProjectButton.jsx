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
        aria-label={
          modifier === 'github'
            ? `GitHub: ${data.frontmatter.title}`
            : `Website: ${data.frontmatter.title}`
        }
      >
        <button
          className={`project-details__button project-details__button--${modifier}`}
        >
          <FontAwesomeIcon
            icon={modifier === 'github' ? faGithub : faGlobe}
            alt=""
          />
          {` ${text}`}
        </button>
      </a>
    </li>
  );
};

export default ProjectButton;
