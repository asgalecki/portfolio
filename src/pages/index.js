import * as React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';

const Home = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes;

  return (
    <div>
      <Navbar />
      <Header />
      <main className="main">
        <Projects projects={projects} id="projects" />
      </main>
      <Footer />
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
          date
          title
          type
          paragraph
          repo
          slug
          stack
          thumbAlt
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
