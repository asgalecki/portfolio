const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const ProjectPageTemplate = path.resolve(
    './src/templates/ProjectPageTemplate.jsx'
  );

  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            date
            description
            title
            slug
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Project Page
  const projects = result.data.allMarkdownRemark.nodes;
  projects.map((project) => {
    createPage({
      path: `/projects/${project.frontmatter.slug}`,
      component: ProjectPageTemplate,
      context: {
        id: project.id,
      },
    });
  });
};
