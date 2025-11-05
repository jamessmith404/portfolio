import React from 'react';
import ResumeCard from './ResumeCard';
import { Education, Experiences } from '@/constant/constant';

const Resume = () => {
  return (
    <div id="experiences" className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols1 xl:grid-cols-2 gap-10">
        {/* Work Section */}
        <div>
          <h1
            className="text-3xl sm:text-4xl font-bold text-white"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <span className="text-cyan-200">Industry</span> Experience
          </h1>
          <div
            className="mt-10"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            {Experiences.map((props, index) => (
              <ResumeCard
                Icon={(iconProps) => (
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <props.Icon size={40} {...iconProps} />
                  </div>
                )}
                role={props.role}
                date={props.date}
                description={props.description}
                company={props.company}
                key={index}
              />
            ))}
          </div>
        </div>
        {/* Education Section */}
        <div>
          <h1
            className="text-3xl sm:text-4xl font-bold text-white"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <span className="text-cyan-200">Academic</span> Experience
          </h1>
          <div
            className="mt-10"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="500"
          >
            {Education.map((props, index) => (
              <ResumeCard
                Icon={(iconProps) => (
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <props.Icon size={40} {...iconProps} />
                  </div>
                )}
                role={props.role}
                date={props.date}
                description={props.description}
                company={props.company}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
