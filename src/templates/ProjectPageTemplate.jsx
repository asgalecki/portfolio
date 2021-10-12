import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Modal from '../components/Modal/Modal';
import ProjectButton from '../components/Projects/ProjectButton';

const ProjectPageTemplate = ({ data }) => {
  const [isTriggered, setIsTriggered] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const showModal = (image) => {
    setModalImage(image);
    setIsTriggered(true);
  };

  const hideModal = () => {
    setIsTriggered(false);
    setTimeout(() => {
      setModalImage(null);
    }, 300);
  };

  const project = data.markdownRemark;
  const frontmatter = project.frontmatter;

  const thumbnail = {
    thumbOne: getImage(frontmatter.thumbOne.childImageSharp.gatsbyImageData),
    thumbTwo: getImage(frontmatter.thumbTwo.childImageSharp.gatsbyImageData),
    thumbThree: getImage(
      frontmatter.thumbThree.childImageSharp.gatsbyImageData
    ),
    thumbFour: getImage(frontmatter.thumbFour.childImageSharp.gatsbyImageData),
    thumbFive: getImage(frontmatter.thumbFive.childImageSharp.gatsbyImageData),
    thumbSix: getImage(frontmatter.thumbSix.childImageSharp.gatsbyImageData),
  };

  let i = 0;

  return (
    <React.Fragment>
      <Helmet htmlAttributes={{ lang: 'en-US' }}>
        <title>Portfolio: {frontmatter.title}</title>
        <meta
          name="description"
          content={`${frontmatter.paragraph} Stack: ${frontmatter.stack}`}
        />
      </Helmet>
      <Modal
        isTriggered={isTriggered}
        handleClose={hideModal}
        modalImage={modalImage}
        imageAlt={frontmatter.thumbAlt}
      />
      <Layout>
        <main className="main">
          <div className="project-page">
            <h1 className="project-page__heading">{frontmatter.title}</h1>
            <section className="project-page__body">
              <GatsbyImage
                image={thumbnail.thumbOne}
                alt={frontmatter.thumbAlt}
                className="project-page__image"
                onClick={() => showModal(thumbnail.thumbOne)}
              />
              <div className="project-page__description">
                <p className="project-page__para">{frontmatter.description}</p>
                <div className="project-page__footer">
                  <ul className="project-page__stack">
                    <h6>
                      <span className="project-page__stack-word">Stack:</span>
                    </h6>
                    {frontmatter.stack.map((listItem) => {
                      return (
                        <li className="project-page__stack-item">{listItem}</li>
                      );
                    })}
                  </ul>
                  <ul className="project-page__buttons">
                    <span className="project-page__button">
                      <ProjectButton
                        data={project}
                        text={`GitHub`}
                        modifier={`github`}
                      />
                    </span>
                    <span className="project-page__button">
                      <ProjectButton
                        data={project}
                        text={`Website`}
                        modifier={`website`}
                        className="project-page__button"
                      />
                    </span>
                  </ul>
                </div>
              </div>
            </section>
            <section className="project-page__gallery">
              {Object.values(thumbnail).map((thumb) => {
                i++;
                return (
                  <GatsbyImage
                    image={thumb}
                    alt={frontmatter.thumbAlt}
                    className="project-page__gallery-image"
                    key={`project-image-${frontmatter.title}-${i}`}
                    onClick={() => showModal(thumb)}
                  />
                );
              })}
            </section>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

export default ProjectPageTemplate;

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        date
        description
        title
        type
        paragraph
        repo
        slug
        stack
        thumbAlt
        website
        thumbOne {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, AVIF]
            )
          }
        }
        thumbTwo {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, AVIF]
            )
          }
        }
        thumbThree {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, AVIF]
            )
          }
        }
        thumbFour {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, AVIF]
            )
          }
        }
        thumbFive {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, AVIF]
            )
          }
        }
        thumbSix {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, AVIF]
            )
          }
        }
      }
    }
  }
`;
