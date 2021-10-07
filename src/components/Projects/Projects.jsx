import React from 'react';
import ProjectDetails from './ProjectDetails';

const Projects = ({ projects }) => {
  let i = 0;

  return (
    <section className="projects">
      <h1 className="projects__heading">projects</h1>
      <div className="projects__body">
        {projects.map((project) => {
          i++;
          return <ProjectDetails data={project} key={`project-${i}`} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
