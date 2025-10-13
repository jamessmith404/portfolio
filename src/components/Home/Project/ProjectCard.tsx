import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaGoogleDrive, FaInfoCircle, FaYoutube } from 'react-icons/fa';

interface Props {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  resourceUrl?: string;
  cardIndex: number;
}

const ProjectCard = ({
  id,
  title,
  description,
  imageUrl,
  tags,
  githubUrl,
  demoUrl,
  resourceUrl,
  cardIndex,
}: Props) => {
  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg bg-[#1a1a2e] group"
      data-aos="flip-left"
      data-aos-delay={200 * (cardIndex % 3)}
      data-aos-anchor-placement="top-center"
    >
      <div className="overflow-hidden h-[250px]">
        <Image
          src={imageUrl}
          alt={title}
          width={800}
          height={650}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h1 className="text-white text-xl sm:text-2xl font-semibold mt-4">
          {title}
        </h1>
        <p className="text-white/80 mt-2">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-cyan-700/50 text-cyan-300 rounded-md text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-6">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors"
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors"
            >
              <FaYoutube size={20} />
              <span>Demo</span>
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
          <Link
            href={`/projects/${id}`}
            className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors"
          >
            <FaInfoCircle size={20} />
            <span>Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
