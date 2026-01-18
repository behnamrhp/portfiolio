import React from 'react';
import { Heading, BodyText } from '../../atoms/Typography';
import SkillIcon from '../../molecules/SkillIcon';
import PageLayout from '../../organisms/PageLayout';
import { dict, skills } from '@/input';

/**
 * Skills Section - Page 2: Languages + Automation & Infrastructure
 * Shows programming languages and DevOps/Infrastructure skills with logos
 */
const SkillsLanguagesPage: React.FC = () => {
  // Get Languages (index 0) and Automation (index 1) categories
    const backendCategory = skills.categories[2];
  const automationCategory = skills.categories[1];
  
  return (
    <PageLayout
      title={dict.skills.title}
      className="px-4 md:px-8"
    >
      <div className="space-y-8">
        {/* Automation & Infrastructure Section */}
        <section>
          <Heading level="h3" className="mb-6">
            {automationCategory.title}
          </Heading>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {automationCategory.skills.map((skill, skillIndex) => (
              <SkillIcon
                key={skillIndex}
                skill={skill}
                className="transition-transform hover:scale-105"
              />
            ))}
          </div>
        </section>

        {/* Backend Section */}
        <section>
          <Heading level="h3" className="mb-4">
            {backendCategory.title}
          </Heading>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {backendCategory.skills.map((skill, skillIndex) => (
              <SkillIcon
                key={skillIndex}
                skill={skill}
                className="transition-transform hover:scale-105"
              />
            ))}
          </div>
        </section>
        
        
        {/* Footer note */}
        <div className="text-center">
          <BodyText size="sm" className="opacity-60">
            Click any logo to visit its official documentation
          </BodyText>
        </div>
      </div>
    </PageLayout>
  );
};

export default SkillsLanguagesPage;

