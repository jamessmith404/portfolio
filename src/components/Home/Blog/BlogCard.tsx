import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  image: string;
  title: string;
  link: string;
  date: string;
  tags?: string[];
};

const BlogCard = ({ image, title, link, date, tags }: Props) => {
  return (
    <article className="flex flex-col">
      {/* Image */}
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <div className="overflow-hidden rounded-md">
          <Image
            src={image}
            alt={title}
            width={1200}
            height={600}
            className="object-cover w-full h-48 rounded-md cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <p className="mt-4 text-gray-500 font-medium text-base sm:text-lg">
        {date}
      </p>

      {/* Title */}
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <h2 className="mt-3 text-lg sm:text-xl font-bold text-white hover:underline hover:text-cyan-300 cursor-pointer transition-all duration-300">
          {title}
        </h2>
      </Link>

      {/* Tags */}
      <div className="mt-4 flex gap-2 items-center flex-wrap">
        {tags?.map((tag, index) => (
          <span key={index} className="inline-block">
            <span className="px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base font-bold rounded-full inline-block">
              {tag}
            </span>
          </span>
        ))}
      </div>
    </article>
  );
};

export default BlogCard;
