import React from 'react';
import ProjectDetails from './ProjectDetails';
import sectionTitle from '../../utils/sectionTitle';

const Projects = ({ type, projects }) => {
  let i = 0;

  return (
    <section className="projects">
      <h1 className="projects__heading">{sectionTitle[type]}</h1>
      <div className="projects__body">
        {projects.map((project) => {
          i++;
          return <ProjectDetails data={project} key={`project-${type}-${i}`} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
