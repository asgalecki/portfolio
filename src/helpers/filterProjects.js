const filterProjects = (type, data) => {
  if (!data.length) {
    return null;
  }

  const isAnyProjectByType = data.find(
    (project) => project.frontmatter.type === type
  );
  if (!isAnyProjectByType) {
    return null;
  }

  const projectsByType = data.filter(
    (project) => project.frontmatter.type === type
  );
  return projectsByType;
};

export default filterProjects;
