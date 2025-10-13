'use client';

import { Projects } from '@/constant/constant';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { FaArrowLeft, FaGithub, FaGoogleDrive } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

import ReactMarkdown from 'react-markdown';

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const project = Projects.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Project not found
      </div>
    );
  }

  const { title, imageUrl, tags, content, githubUrl, demoUrl, resourceUrl } =
    project;

  return (
    <div className="p-8 pt-[14vh] min-h-screen bg-[#0d0d1f] text-white">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-cyan-300 hover:text-cyan-400 transition-colors mb-8"
        >
          <FaArrowLeft />
          <span>Back to Projects</span>
        </Link>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <Image
          src={imageUrl}
          alt={title}
          width={1200}
          height={800}
          className="rounded-lg mb-6"
        />
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-cyan-700/50 text-cyan-300 rounded-md text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        {content && (
          <div className="prose prose-invert text-lg text-white/80 mb-8 text-justify">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}
        <div className="flex items-center gap-6">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors"
            >
              <FaGithub size={24} />
              <span className="text-lg">GitHub</span>
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors"
            >
              <TbWorldWww size={24} />
              <span className="text-lg">Demo</span>
            </a>
          )}
          {resourceUrl && (
            <a
              href={resourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors"
            >
              <FaGoogleDrive size={20} />
              <span>Resource</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
