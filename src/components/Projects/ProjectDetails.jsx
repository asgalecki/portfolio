import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import ProjectButton from './ProjectButton';

const ProjectDetails = ({ data }) => {
  const thumbnail = getImage(
    data.frontmatter.thumbOne.childImageSharp.gatsbyImageData
  );

  return (
    <div className="project-details">
      <Link
        to={`projects/${data.frontmatter.slug}`}
        className="project-details__link"
      >
        <GatsbyImage
          image={thumbnail}
          alt={data.frontmatter.thumbAlt}
          className="project-details__image"
        />
      </Link>

      <div className="project-details__body">
        <h3 className="project-details__heading">
          <Link
            to={`projects/${data.frontmatter.slug}`}
            className="project-details__link"
          >
            {data.frontmatter.title}
          </Link>
        </h3>

        <p className="project-details__para">{data.frontmatter.paragraph}</p>

        <ul className="project-details__stack">
          <h6>
            <span className="project-details__stack-word">Stack:</span>
          </h6>
          {data.frontmatter.stack.map((listItem) => {
            return <li className="project-details__stack-item">{listItem}</li>;
          })}
        </ul>

        <ul className="project-details__buttons">
          <ProjectButton data={data} text={`GitHub`} modifier={`github`} />
          <ProjectButton data={data} text={`Website`} modifier={`website`} />
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;
