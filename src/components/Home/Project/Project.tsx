import React from 'react';
import { Projects } from '@/constant/constant';
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <div id="projects" className="pt-16 pb-16">
      <h1
        className="text-center text-3xl md:text-4xl xl:text-5xl font-bold text-white"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-anchor-placement="top-center"
      >
        A small selection of <br /> recent{' '}
        <span className="text-cyan-300">projects</span>
      </h1>
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {Projects.map((project, index) => (
          <ProjectCard key={index} cardIndex={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
