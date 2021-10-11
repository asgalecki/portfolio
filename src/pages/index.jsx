import * as React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/Header/Header';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Layout from '../components/Layout';

const Home = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <Header />
      <main className="main">
        <Projects projects={projects} id="projects" />
        <Contact />
      </main>
    </Layout>
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
