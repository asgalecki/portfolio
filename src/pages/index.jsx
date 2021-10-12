import * as React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Header from '../components/Header/Header';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Layout from '../components/Layout';

const Home = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes;

  return (
    <React.Fragment>
      <Helmet>
        <title>Portfolio: Artur Gałecki</title>
        <meta
          name="description"
          content="Portfolio website that contains some of my finished, commercial and non-commercial projects."
        />
      </Helmet>
      <Layout>
        <Header />
        <main className="main">
          <Projects projects={projects} id="projects" />
          <Contact />
        </main>
      </Layout>
    </React.Fragment>
  );
};

export default Home;

export const query = graphql`
  query AllProjects {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        id
        frontmatter {
          date
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
        }
      }
    }
  }
`;
