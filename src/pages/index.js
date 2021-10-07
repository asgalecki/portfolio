import * as React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Projects from '../components/Projects/Projects';
import filterProjects from '../helpers/filterProjects';

const Home = ({ data }) => {
  const allProjects = data.allMarkdownRemark.nodes;

  const nonCommercialType = 'noncommercial';
  const nonCommercialProjects = filterProjects(nonCommercialType, allProjects);

  const commercialType = 'commercial';
  const commercialProjects = filterProjects(commercialType, allProjects);

  return (
    <div>
      <Navbar />
      <Header />
      <main className="main">
        <Projects
          type={commercialType}
          projects={commercialProjects}
          id="projects"
        />
        <Projects type={nonCommercialType} projects={nonCommercialProjects} />
      </main>
    </div>
  );
};

export default Home;

export const query = graphql`
  query AllProjects {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        id
        frontmatter {
          type
          title
          date
          slug
          paragraph
          thumbAlt
          stack
          repo
          website
          thumb {
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
  }
`;
