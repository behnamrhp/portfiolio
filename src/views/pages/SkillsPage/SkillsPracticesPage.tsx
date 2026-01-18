import React from 'react';
import { Heading, BodyText } from '../../atoms/Typography';
import PageLayout from '../../organisms/PageLayout';
import { dict, skills } from '@/input';
import { SkillIcon } from '@/views/molecules';

/**
 * Skills Section - Page 1: Software Engineering Practices & Architectures
 * Shows software engineering principles and best practices (text only, no logos)
 */
const SkillsPracticesPage: React.FC = () => {
  const languagesCategory = skills.categories[0];

  return (
    <PageLayout
      title={dict.skills.title}
      className="px-4 md:px-8"
    >
      <div>
        {/* Software Engineering Principles - Text Only */}
        <section>
          <Heading level="h3" className="mb-4">
            Software Engineering Practices & Architectures
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {skills.principles.map((principle, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 border border-manuscript-ink rounded-sm hover:bg-manuscript-ink hover:bg-opacity-5 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="stroke-manuscript-lapis flex-shrink-0"
                >
                  <path
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <BodyText size="sm" className="flex-1">
                  {principle}
                </BodyText>
              </div>
            ))}
          </div>
        </section>

         {/* Languages Section */}
        <section className='mt-8'>
          <Heading level="h3" className="mb-6">
            {languagesCategory.title}
          </Heading>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {languagesCategory.skills.map((skill, skillIndex) => (
              <SkillIcon
                key={skillIndex}
                skill={skill}
                className="transition-transform hover:scale-105"
              />
            ))}
          </div>
        </section>
        
       
      </div>
    </PageLayout>
  );
};

export default SkillsPracticesPage;

