// Blog.tsx
import React from 'react';
import BlogCard from './BlogCard';

import { Blogs } from '@/constant/constant';
import { BsHandIndexThumb } from 'react-icons/bs';

const Blog = () => {
  return (
    <div id="blogs" className="pt-16 pb-16">
      <h1
        className="text-center text-4xl xl:text-5xl font-bold text-white"
        data-aos="fade-right"
        data-aos-delay={0}
        data-aos-anchor-placement="top-center"
      >
        My latest <span className="text-cyan-200">Blogs</span>
      </h1>

      {/* grid: 1 column mobile, 2 on md, 3 on xl; top-align items */}
      <div className="w-[70%] mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-start">
        {Blogs &&
          Blogs.map((blog, index) => (
            <div
              key={index}
              data-aos="fade-right"
              data-aos-delay={(index + 1) * 300}
              data-aos-anchor-placement="top-center"
            >
              <BlogCard
                image={blog.image}
                title={blog.title}
                link={blog.link}
                date={blog.date}
                tags={blog.tags}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blog;
