import React from 'react';
import { Heading } from '../../atoms/Typography';
import SkillIcon from '../../molecules/SkillIcon';
import PageLayout from '../../organisms/PageLayout';
import { dict, skills } from '@/input';

/**
 * Skills Section - Page 3: Backend + Frontend
 * Shows backend and frontend technical stack with logos
 */
const SkillsStackPage: React.FC = () => {
  // Get Backend (index 2) and Frontend (index 3) categories
  const frontendCategory = skills.categories[3];
  
  return (
    <PageLayout
      title={dict.skills.title}
      className="px-4 md:px-8"
    >
      <div className="space-y-8">
        
        
        {/* Frontend Section */}
        <section>
          <Heading level="h3" className="mb-6">
            {frontendCategory.title}
          </Heading>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {frontendCategory.skills.map((skill, skillIndex) => (
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

export default SkillsStackPage;

