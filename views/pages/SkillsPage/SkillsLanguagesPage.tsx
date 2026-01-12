import React from 'react';
import { Heading, BodyText } from '../../atoms/Typography';
import Divider from '../../atoms/Divider';
import SkillIcon from '../../molecules/SkillIcon';
import PageLayout from '../../organisms/PageLayout';
import { dict, skills } from '@/input';

/**
 * Skills Section - Page 2: Languages + Automation & Infrastructure
 * Shows programming languages and DevOps/Infrastructure skills with logos
 */
const SkillsLanguagesPage: React.FC = () => {
  // Get Languages (index 0) and Automation (index 1) categories
  const languagesCategory = skills.categories[0];
  const automationCategory = skills.categories[1];
  
  return (
    <PageLayout
      title={dict.skills.title}
      className="px-4 md:px-8"
    >
      <div className="space-y-8">
                {/* Drag hint */}
        <div className="bg-manuscript-lapis bg-opacity-10 border-l-4 border-manuscript-lapis p-4 rounded-sm">
          <BodyText size="sm" className="italic">
            💡 {dict.skills.dragHint}
          </BodyText>
        </div>
        
        <Divider dividerStyle="ornamental" />
        {/* Languages Section */}
        <section>
          <Heading level="h3" className="mb-6">
            {languagesCategory.title}
          </Heading>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {languagesCategory.skills.map((skill, skillIndex) => (
              <SkillIcon
                key={skillIndex}
                skill={skill}
                isDraggable={true}
                className="transition-transform hover:scale-105"
              />
            ))}
          </div>
        </section>
        
        <Divider />
        
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
                isDraggable={true}
                className="transition-transform hover:scale-105"
              />
            ))}
          </div>
        </section>
        
        {/* Footer note */}
        <div className="text-center pt-4">
          <BodyText size="sm" className="opacity-60">
            Click any logo to visit its official documentation
          </BodyText>
        </div>
      </div>
    </PageLayout>
  );
};

export default SkillsLanguagesPage;

